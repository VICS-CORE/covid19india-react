import {formatNumber} from '../../utils/commonfunctions';
import {format} from 'date-fns';

export const chartOptions = {
  title: {
    text: 'COVID-19 Predictions',
  },
  chart: {
    type: 'spline',
    height: 600,
    blah: 'bleh'
  },
  series: [
    {
      name: 'Confirmed Cases',
      dataGrouping: {
        forced: true,
        units: [['month', [1]]],
      },
      color: 'orange',
    },
    {
      name: 'Predicted Cases',
      dataGrouping: {
        forced: true,
        units: [['month', [1]]]
      },
      color: '#7cb5ec'
    }
  ],
  legend:{
    align: 'right',
    verticalAlign: 'top',
    layout: 'vertical',
    x: -10,
    y: 50,
    floating: true
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
    max: 175000,
    min: 0,
    tickAmount: 10,
  },
  motion: {
    enabled: true,
    axisLabel: 'date',
    loop: false,
    updateInterval: 1000,
    magnet: {
      round: 'round',
      step: 1,
    },
  },
};