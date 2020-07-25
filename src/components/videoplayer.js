import {chartOptions} from './constants/chart-options';
import Footer from './footer';

import axios from 'axios';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import {keys, transform, isEmpty} from 'lodash';
import queryString from 'query-string';
import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';

import './motion.js';

function VideoPlayer() {
  const [options, setOptions] = useState({});
  const queryStringParams = queryString.parse(window.location.search);
  const model =
    queryStringParams && queryStringParams.model
      ? queryStringParams.model
      : '1.1740';
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
    axios
      .all(requests)
      .then((response) => {
        const data = response[0].data;
        const labels = keys(data);
        const highlightedDate = labels[labels.length - 1];
        chartOptions.motion.labels = labels;
        chartOptions.chart.fullData = data;
        chartOptions.series[0].data = transform(
          data[highlightedDate].TT,
          function (res, v, k) {
            if (k <= highlightedDate) {
              res.push({x: new Date(k), y: v.c});
            }
          },
          []
        );
        updatePredictedCases(data, highlightedDate);
        setOptions(chartOptions);
      })
      .catch((error) => {
        alert(`The model ${model} does not exist.`);
      });
  }, [model, models]);

  function updatePredictedCases(data, highlightedDate) {
    if (data[highlightedDate]) {
      chartOptions.series[1].data = transform(
        data[highlightedDate].TT,
        function (res, v, k) {
          if (k >= highlightedDate) {
            res.push({x: new Date(k), y: v.c});
          }
        },
        []
      );
    }
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
        {models.map((model, index) => {
          return (
            !isEmpty(options) && (
              <div className="model" key={index}>
                <HighchartsReact
                  options={options}
                  highcharts={Highcharts}
                ></HighchartsReact>
              </div>
            )
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(VideoPlayer);
