import {chartOptions} from './constants/chart-options';
import Footer from './footer';

import axios from 'axios';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import {keys, transform, intersection, cloneDeep} from 'lodash';
import queryString from 'query-string';
import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';

import './motion.js';

function VideoPlayer() {
  const [options, setOptions] = useState([]);
  const queryStringParams = queryString.parse(window.location.search);
  const models =
    queryStringParams && queryStringParams.model
      ? queryStringParams.model.split(',')
      : ['1.1740'];

  useEffect(() => {
    const requests = [];
    for (const model of models) {
      requests.push(
        axios.get(`https://vics-core.github.io/covid-api/vp/${model}.json`)
      );
    }

    axios.all(requests).then((responses) => {
      let ops = [];
      const labels = intersection(...responses.map((r) => keys(r.data)));
      const highlightedDate = labels[labels.length - 1];
      responses.map((response, index) => {
        const option = cloneDeep(chartOptions);
        const data = response.data;
        option.chart.fullData = data;
        option.motion.labels = labels;
        updateConfirmedCases(option, highlightedDate);
        updatePredictedCases(option, highlightedDate);
        ops = ops.concat(option);
      });
      setOptions(ops);
    });

    function updatePredictedCases(option, highlightedDate) {
      const data = option.chart.fullData;
      if (data[highlightedDate]) {
        option.series[1].data = transform(
          data[highlightedDate].TT,
          function (res, v, k) {
            if (k >= highlightedDate) {
              res.push(createSeriesData(k, v));
            }
          },
          []
        );
      }
    }
  }, []);

  function updateConfirmedCases(option, highlightedDate) {
    option.series[0].data = transform(
      option.chart.fullData[highlightedDate].TT,
      function (res, v, k) {
        if (k <= highlightedDate) {
          res.push({x: new Date(k), y: v.c});
        }
      },
      []
    );
  }

  function createSeriesData(key, value) {
    return {x: new Date(key), y: value.c};
  }

  return (
    <div className="VideoPlayer">
      <Helmet>
        <title>Video Player - seva.ml</title>
        <meta name="title" content={`Video Player - seva.ml`} />
        <meta
          name="description"
          content="A video to demonstrate how the predictions are changing per day."
        />
      </Helmet>

      <div className="header fadeInUp" style={{animationDelay: '0.3s'}}>
        <h1>Video Player</h1>
      </div>
      <div className="models">
        {options.map((option, index) => {
          return (
            <div className="model" key={index}>
              <HighchartsReact
                options={option}
                highcharts={Highcharts}
              ></HighchartsReact>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(VideoPlayer);
