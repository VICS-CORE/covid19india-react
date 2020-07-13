import {keys, transform, isEmpty} from 'lodash';
import React, {useState, useEffect} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import plugin from './motion.js';
import {Helmet} from 'react-helmet';
import Footer from './footer';
import {chartOptions} from './constants/chart-options'

function VideoPlayer() {
  const [options, setOptions] = useState({});

  useEffect(() => {
    axios.get('https://vics-core.github.io/covid-api/vp/1.1740.json')
      .then(response => {
        const data = response.data;
        const labels = keys(data);
        const highlightedDate = labels[labels.length - 1]
        chartOptions.motion.labels = labels;
        chartOptions.chart.fullData = data;
        chartOptions.series[0].data = (transform(data[highlightedDate].TT, function(res, v, k) {
          if(k<=highlightedDate){res.push({x: new Date(k), y: v.c})};
        }, []));
        updatePredictedCases(data, highlightedDate);
        setOptions(chartOptions);
    });
  },[]);

  function updatePredictedCases(data,highlightedDate,){
    if(data[highlightedDate]){
      chartOptions.series[1].data = (transform(data[highlightedDate].TT, function(res, v, k) {
        if(k>=highlightedDate){res.push({x: new Date(k), y: v.c})};
      }, []));
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
      { !isEmpty(options) && <HighchartsReact
        options={options}
        highcharts={Highcharts}
      ></HighchartsReact>}
      <Footer />
    </div>
  );
}

export default React.memo(VideoPlayer);
