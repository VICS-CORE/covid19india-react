import {
  chartOptions,
  titles,
  restOfTheStates,
} from './constants/states-chart-options';
import {STATE_NAMES} from '../constants'
import Footer from './footer';

import axios from 'axios';
import {format} from 'date-fns';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import {map, each, orderBy, cloneDeep, times} from 'lodash';
import {MDBDataTable} from 'mdbreact';
import queryString from 'query-string';
import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function States() {
  const [options, setOptions] = useState([]);
  const [totalOptions, setTotalOptions] = useState({});
  const [restOfTheStatesData, setRestOfTheStatesData] = useState({});
  const queryStringParams = queryString.parse(window.location.search);
  const model = (queryStringParams && queryStringParams.model) || '1.1740';

  useEffect(() => {
    axios
      .get(`https://vics-core.github.io/covid-api/predictions.json`)
      .then((response) => {
        updateSeriesData(response.data);
      });

    function updateSeriesData(data) {
      each(data, function (v, state) {
        const {predictions, max, maxDate} = getSeriesData(v);
        if (state === 'TT') {
          const ttOptions = cloneDeep(chartOptions);
          ttOptions.title.text = 'Aggregated Prediction';
          ttOptions.series = {
            name: state,
            data: predictions,
            max: max,
            maxDate: maxDate,
          };
          setTotalOptions(ttOptions);
        } else {
          chartOptions.series.push({
            name: state,
            data: predictions,
            max: max,
            maxDate: maxDate,
          });
        }
      });
      drawTopCharts();
      setDataForTable();
    }

    function getSeriesData(v) {
      let max = 0;
      let maxDate;
      const predictions = map(v, function (result, date) {
        const dailyCofirmed = result.delta.confirmed || 0;
        if (max < dailyCofirmed) {
          max = dailyCofirmed;
          maxDate = new Date(date);
        }
        return {x: new Date(date), y: dailyCofirmed};
      });
      return {predictions: predictions, max: max, maxDate: maxDate};
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

    function setDataForTable() {
      each(chartOptions.series.slice(21), function (series) {
        restOfTheStates.rows.push({
          code: STATE_NAMES[series.name],
          c: series.max,
          date: format(series.maxDate, 'dd MMM, yyyy'),
        });
      });
      setRestOfTheStatesData(restOfTheStates);
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
        <h2>Model: {model}</h2>
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
      <div className="states-table">
        <MDBDataTable hover searchTop searchBottom={false} pagingTop pagingBottom={false} responsive striped bordered data={restOfTheStatesData} autoWidth>
          <caption>Peaks</caption>
        </MDBDataTable>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(States);
