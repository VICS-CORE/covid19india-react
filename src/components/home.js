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
    if (st === 'TT') {
      for (const dt in past[st]) {
        if (dt === today) continue;
        merged[st][dt] = {};
        merged[st][dt]['delta'] = past[st][dt]['delta'];
        console.log('TOTAL: ', past[st][dt]['total']);
        merged[st][dt]['total'] =
          past[st][dt]['total'] === {}
            ? past[st][dt]['total']
            : {active: 0, confirmed: 0, deceased: 0, recovered: 0};
      }
    } else {
      for (const district in past[st]) {
        merged[st][district] = {};
        // console.log('DISTRICT: ', district, past[st][district]);
        for (const dt in past[st][district]) {
          if (dt === today) continue;
          merged[st][district][dt] = {};
          merged[st][district][dt]['delta'] = past[st][district][dt]['delta'];

          if (past[st][district][dt]['total'] === {}) {
            merged[st][district][dt]['total'] = past[st][district][dt]['total'];
          } else {
            // console.log('NOT PRESENT');
            merged[st][district][dt]['total'] = {
              active: 0,
              confirmed: 0,
              deceased: 0,
              recovered: 0,
            };
          }
        }
      }
    }
  }
  console.log('PAST MERGED DATA: ', merged);
  for (const st in future) {
    if (st === 'TT') {
      for (const dt in future[st]) {
        if (dt < today) continue;
        // console.log(future[st][district]);
        merged[st][dt] = {};
        const dt_minus_1 = yesterday(dt);
        merged[st][dt]['delta'] = future[st][dt]['delta'];
        merged[st][dt]['total'] = {};
        for (const k in merged[st][dt]['delta']) {
          merged[st][dt]['total'][k] =
            merged[st][dt_minus_1]['total'][k] + merged[st][dt]['delta'][k];
        }
      }
    } else {
      for (const district in future[st]) {
        for (const dt in future[st][district]) {
          if (dt < today) continue;
          // console.log('DATE: ', dt);
          // console.log('MERGED_DT: ', district, merged[st][district]);
          merged[st][district][dt] = {};
          const dt_minus_1 = yesterday(dt);
          // console.log('DELTA: ', merged[st][district][dt]['delta']);
          merged[st][district][dt]['delta'] = future[st][district][dt]['delta'];
          merged[st][district][dt]['total'] = {};

          for (const k in merged[st][district][dt]['delta']) {
            // console.log(
            //   'DISTRICT: ',
            //   district,
            //   merged[st][district][dt_minus_1]
            // );
            merged[st][district][dt]['total'][k] =
              merged[st][district][dt_minus_1]['total'][k] +
              merged[st][district][dt]['delta'][k];
          }
        }
      }
    }
  }
  console.log('MERGED: ', merged);
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

  const convertStructure = (timeseries) => {
    let ALL_STATES = Object.keys(timeseries['2020-07-01']);
    ALL_STATES = ALL_STATES.filter((STATE) => STATE !== 'UN');
    const ALL_DISTTS = {};
    for (const st in ALL_STATES) {
      const state = ALL_STATES[st];
      if (state == 'TT') continue;
      ALL_DISTTS[state] = Object.keys(
        timeseries['2020-07-01'][state]['districts']
      );
    }
    const ALL_DATA = {};

    for (const dt in timeseries) {
      // console.log('DATE: ', dt);
      for (const st in ALL_STATES) {
        const state = ALL_STATES[st];

        if (!ALL_DATA[state]) ALL_DATA[state] = {};
        const stateObj = timeseries[dt][state] || {};
        console.log('STATE_OBJ: ', state, stateObj);

        const deltac = stateObj['delta']
          ? stateObj['delta']['confirmed']
            ? stateObj['delta']['confirmed']
            : 0
          : 0;
        const deltad = stateObj['delta']
          ? stateObj['delta']['deceased']
            ? stateObj['delta']['deceased']
            : 0
          : 0;
        const deltar = stateObj['delta']
          ? stateObj['delta']['recovered']
            ? stateObj['delta']['recovered']
            : 0
          : 0;
        const deltat = stateObj['delta']
          ? stateObj['delta']['tested']
            ? stateObj['delta']['tested']
            : 0
          : 0;

        ALL_DATA[state]['TT'] = {};
        ALL_DATA[state]['TT']['delta'] = {
          confirmed: deltac,
          active: deltac - deltar,
          deceased: deltad,
          recovered: deltar,
          tested: deltat,
        };

        const totalc = stateObj['total']
          ? stateObj['total']['confirmed']
            ? stateObj['total']['confirmed']
            : 0
          : 0;
        const totald = stateObj['total']
          ? stateObj['total']['deceased']
            ? stateObj['total']['deceased']
            : 0
          : 0;
        const totalr = stateObj['total']
          ? stateObj['total']['recovered']
            ? stateObj['total']['recovered']
            : 0
          : 0;
        const totalt = stateObj['total']
          ? stateObj['total']['tested']
            ? stateObj['total']['tested']
            : 0
          : 0;

        ALL_DATA[state]['TT']['total'] = {
          confirmed: totalc,
          active: totalc - totalr,
          deceased: totald,
          recovered: totalr,
          tested: totalt,
        };

        if (state == 'TT') {
          ALL_DATA[state]['delta'] = {
            confirmed: deltac,
            active: deltac - deltar,
            deceased: deltad,
            recovered: deltar,
            tested: deltat,
          };
          ALL_DATA[state]['total'] = {
            confirmed: totalc,
            active: totalc - totalr,
            deceased: totald,
            recovered: totalr,
            tested: totalt,
          };

          continue;
        }
        for (const ds in ALL_DISTTS[state]) {
          const district = ALL_DISTTS[state][ds];

          // console.log('DISTRICT: ', district);
          if (!ALL_DATA[state][district]) {
            ALL_DATA[state][district] = {};
          }
          if (!ALL_DATA[state][district][dt]) {
            ALL_DATA[state][district][dt] = {};
          }

          const districtObj = stateObj['districts']
            ? stateObj['districts'][district]
              ? stateObj['districts'][district]
              : 0
            : {};

          const deltac = districtObj['delta']
            ? districtObj['delta']['confirmed']
              ? districtObj['delta']['confirmed']
              : 0
            : 0;
          const deltad = districtObj['delta']
            ? districtObj['delta']['deceased']
              ? districtObj['delta']['deceased']
              : 0
            : 0;
          const deltar = districtObj['delta']
            ? districtObj['delta']['recovered']
              ? districtObj['delta']['recovered']
              : 0
            : 0;
          const deltat = districtObj['delta']
            ? districtObj['delta']['tested']
              ? districtObj['delta']['tested']
              : 0
            : 0;

          ALL_DATA[state][district][dt]['delta'] = {
            confirmed: deltac,
            active: deltac - deltar,
            deceased: deltad,
            recovered: deltar,
            tested: deltat,
          };

          const totalc = districtObj['total']
            ? districtObj['total']['confirmed']
              ? districtObj['total']['confirmed']
              : 0
            : 0;
          const totald = districtObj['total']
            ? districtObj['total']['deceased']
              ? districtObj['total']['deceased']
              : 0
            : 0;
          const totalr = districtObj['total']
            ? districtObj['total']['recovered']
              ? districtObj['total']['recovered']
              : 0
            : 0;
          const totalt = districtObj['total']
            ? districtObj['total']['tested']
              ? districtObj['total']['tested']
              : 0
            : 0;

          ALL_DATA[state][district][dt]['total'] = {
            confirmed: totalc,
            active: totalc - totalr,
            deceased: totald,
            recovered: totalr,
            tested: totalt,
          };
        }
      }
    }

    console.log('ALL_DATA: ', ALL_DATA);

    return ALL_DATA;
  };

  useMemo(() => {
    const pastTimeseries = axios.get(
      'https://api.covid19india.org/v4/data-all.json'
    );
    const futureTimeseries = axios.get(
      'https://raw.githubusercontent.com/coffeeDev98/covid19india-react/predictions/predictions_districts.json'
    );
    axios.all([pastTimeseries, futureTimeseries]).then(
      axios.spread((...responses) => {
        let pastTimeseriesData = responses[0].data;
        const futureTimeseriesData = responses[1].data;

        pastTimeseriesData = convertStructure(pastTimeseriesData);

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
    const ret = {};
    for (const st in timeseries) {
      ret[st] = {};
      if (st === 'TT') {
        if (timeseries.hasOwnProperty(st)) {
          ret[st] = timeseries[st][date];
        }
      } else {
        for (const district in timeseries[st]) {
          if (timeseries.hasOwnProperty(st)) {
            ret[st][district] = timeseries[st][district][date];
          }
        }
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
