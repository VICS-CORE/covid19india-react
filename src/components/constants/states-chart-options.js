import {formatNumber} from '../../utils/commonfunctions';

import {format} from 'date-fns';

export const chartOptions = {
  title: {
    text: 'COVID-19 Predictions',
  },
  chart: {
    type: 'spline',
    height: 600,
  },
  series: [
    {
      name: 'AN',
      data: [],
    },
  ],
  legend: {
    align: 'right',
    verticalAlign: 'top',
    layout: 'vertical',
    x: -10,
    y: 50,
    floating: true,
  },
  tooltip: {
    formatter: function () {
      return (
        '<b>' +
        formatNumber(this.y) +
        '</b><br/>' +
        format(this.x, 'dd MMM, yyyy')
      );
    },
  },
  credits: {
    enabled: false,
  },
  xAxis: {
    type: 'datetime',
    tickInterval: 30 * 24 * 3600 * 1000,
    range: 12 * 30 * 24 * 3600 * 1000,
  },
  yAxis: {
    title: {
      text: 'Daily Reported Cases',
    },
    min: 0,
    tickAmount: 10,
  },
};

export const titles = {
  0: "Top Seven States",
  1: "Second Highest Seven States",
  2: "Third Highest Seven States"
}
