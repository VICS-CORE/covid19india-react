import {chartOptions, titles} from './constants/states-chart-options';
import Footer from './footer';

import axios from 'axios';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import {map, each, orderBy, cloneDeep, times} from 'lodash';
import queryString from 'query-string';
import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';

function States() {
  const [options, setOptions] = useState([]);
  const [totalOptions, setTotalOptions] = useState({});
  const queryStringParams = queryString.parse(window.location.search);
  const model = queryStringParams && queryStringParams.model;

  useEffect(() => {
    axios
      .get(`https://vics-core.github.io/covid-api/predictions.json`)
      .then((response) => {
        updateSeriesData(response.data);
      });

    function updateSeriesData(data) {
      each(data, function (v, state) {
        const {predictions, max} = getSeriesData(v);
        if (state === 'TT') {
          const ttOptions = cloneDeep(chartOptions);
          ttOptions.title.text = 'Aggregated Prediction';
          ttOptions.series = {name: state, data: predictions, max: max};
          setTotalOptions(ttOptions);
        } else {
          chartOptions.series.push({name: state, data: predictions, max: max});
        }
      });
      drawTopCharts();
    }

    function getSeriesData(v) {
      let max = 0;
      const predictions = map(v, function (result, date) {
        const dailyCofirmed = result.delta.confirmed || 0;
        max = max > dailyCofirmed ? max : dailyCofirmed;
        return {x: new Date(date), y: dailyCofirmed};
      });
      return {predictions: predictions, max: max};
    }

    function drawTopCharts() {
      chartOptions.series = orderBy(chartOptions.series, 'max', 'desc');
      const topStates = [];
      times(3, function (i) {
        const option = cloneDeep(chartOptions);
        option.title.text = titles[i];
        option.series = chartOptions.series.slice(i * 7, (i + 1) * 7);
        topStates.push(option);
      });
      setOptions(topStates);
    }
  }, []);

  return (
    <div className="States">
      <Helmet>
        <title>States Predictions - seva.ml</title>
        <meta name="title" content={`States Predictions - seva.ml`} />
        <meta
          name="description"
          content="Charts to show state wise prediction."
        />
      </Helmet>

      <div className="header fadeInUp" style={{animationDelay: '0.3s'}}>
        <h1>States Predictions</h1>
      </div>
      <div className="charts">
        {options.map((option, index) => {
          return (
            <div className="chart" key={index}>
              <HighchartsReact
                options={option}
                highcharts={Highcharts}
              ></HighchartsReact>
            </div>
          );
        })}
      </div>
      <HighchartsReact
        options={totalOptions}
        highcharts={Highcharts}
      ></HighchartsReact>
      <div>Model: {model}</div>
      <Footer />
    </div>
  );
}

export default React.memo(States);
