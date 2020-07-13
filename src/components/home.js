import {MAP_META} from '../constants';

import axios from 'axios';
import {format} from 'date-fns';
import React, {useState, useRef, lazy, Suspense, useMemo} from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {useIsVisible} from 'react-is-visible';

import 'intersection-observer';

const TimeSeriesExplorer = lazy(() =>
  import('./timeseriesexplorer' /* webpackChunkName: "TimeSeriesExplorer" */)
);

const Actions = lazy(() =>
  import('./actions' /* webpackChunkName: "Actions" */)
);

const Table = lazy(() => import('./table' /* webpackChunkName: "Table" */));

const Minigraph = lazy(() =>
  import('./minigraph' /* webpackChunkName: "Minigraph" */)
);

const Footer = lazy(() => import('./footer' /* webpackChunkName: "Footer" */));

const Level = lazy(() => import('./level' /* webpackChunkName: "Level" */));

function yesterday(dt) {
  const dtObj = new Date(dt);
  dtObj.setDate(dtObj.getDate() - 1);
  return format(dtObj, 'yyyy-MM-dd');
}

function merge(past, future, today) {
  const merged = {};
  for (const st in past) {
    merged[st] = {};
    for (const dt in past[st]) {
      if (dt === today) continue;
      merged[st][dt] = {};
      merged[st][dt]['delta'] = past[st][dt]['delta'];
      merged[st][dt]['total'] = past[st][dt]['total'];
    }
  }
  for (const st in future) {
    for (const dt in future[st]) {
      if (dt < today) continue;
      merged[st][dt] = {};
      const dt_minus_1 = yesterday(dt);
      merged[st][dt]['delta'] = future[st][dt]['delta'];
      merged[st][dt]['total'] = {};
      for (const k in merged[st][dt]['delta']) {
        merged[st][dt]['total'][k] =
          merged[st][dt_minus_1]['total'][k] + merged[st][dt]['delta'][k];
      }
    }
  }
  return merged;
}

function Home(props) {
  const [regionHighlighted, setRegionHighlighted] = useState({
    stateCode: 'TT',
    districtName: null,
  });

  const [anchor, setAnchor] = useState(null);
  const today = format(new Date(), 'yyyy-MM-dd');
  const [date, setDate] = useState(today);
  const [data, setData] = useState({});
  const [timeseries, setTimeseries] = useState({});
  const {t} = useTranslation();

  useMemo(() => {
    const pastTimeseries = axios.get(
      'https://api.covid19india.org/v3/min/timeseries.min.json'
    );
    const futureTimeseries = axios.get(
      'https://vics-core.github.io/covid-api/predictions.json'
    );
    axios.all([pastTimeseries, futureTimeseries]).then(
      axios.spread((...responses) => {
        const pastTimeseriesData = responses[0].data;
        const futureTimeseriesData = responses[1].data;

        const mergedTimeseriesData = merge(
          pastTimeseriesData,
          futureTimeseriesData,
          today
        );
        setTimeseries(mergedTimeseriesData);
      })
    );
  }, [today]);

  useMemo(() => {
    let ret = {};
    for (const st in timeseries) {
      if (timeseries.hasOwnProperty(st)) {
        ret[st] = timeseries[st][date];
      }
    }
    setData(ret);
  }, [date, timeseries]);

  const homeRightElement = useRef();
  const isVisible = useIsVisible(homeRightElement, {once: true});

  const stateCodes = [
    'TT',
    ...[
      ...new Set([
        ...Object.keys(MAP_META).filter((stateCode) => stateCode !== 'TT'),
        ...Object.keys(data || {}).filter((stateCode) => stateCode !== 'TT'),
      ]),
    ].sort(),
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Coronavirus Projections for India - seva.ml</title>
        <meta name="title" content="Coronavirus Projections for India" />
      </Helmet>
      <div className="Home">
        <Suspense fallback={<div />}>
          <div className="Search">
            <h1>{t('COVID-19 AI Predictions')}</h1>
          </div>
        </Suspense>
        <div className="home-left">
          <div className="header">
            {timeseries['TT'] && (
              <Suspense fallback={<div style={{minHeight: '56px'}} />}>
                <Actions
                  {...{
                    setDate,
                    dates: Object.keys(timeseries['TT']).reverse(),
                    date,
                  }}
                />
              </Suspense>
            )}
          </div>

          {data['TT'] && (
            <Suspense fallback={<div />}>
              <Level data={data['TT']} />
            </Suspense>
          )}

          <Suspense fallback={<div />}>
            {timeseries['TT'] && (
              <Minigraph timeseries={timeseries['TT']} {...{date}} />
            )}
          </Suspense>

          <Suspense fallback={<div />}>
            {data['TT'] && (
              <Table {...{data, regionHighlighted, setRegionHighlighted}} />
            )}
          </Suspense>
        </div>

        <div className="home-right" ref={homeRightElement}>
          {isVisible && (
            <React.Fragment>
              {timeseries['TT'] && (
                <Suspense fallback={<div />}>
                  <TimeSeriesExplorer
                    timeseries={timeseries[regionHighlighted.stateCode]}
                    {...{date, stateCodes}}
                    {...{regionHighlighted, setRegionHighlighted}}
                    {...{anchor, setAnchor}}
                  />
                </Suspense>
              )}
            </React.Fragment>
          )}
        </div>
      </div>
      {isVisible && (
        <Suspense fallback={<div />}>
          <Footer />
        </Suspense>
      )}
    </React.Fragment>
  );
}

export default Home;
