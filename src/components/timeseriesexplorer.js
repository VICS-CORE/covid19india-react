import TimeseriesLoader from './loaders/timeseries';

import {
  STATE_NAMES,
  TIMESERIES_CHART_TYPES,
  TIMESERIES_OPTIONS,
} from '../constants';
import {getIndiaTodayISO, parseIndiaDate} from '../utils/commonfunctions';

import 'intersection-observer';

import {PinIcon} from '@primer/octicons-v2-react';
import classnames from 'classnames';
import {formatISO, add, sub} from 'date-fns';
import equal from 'fast-deep-equal';
import React, {useMemo, useRef, useState, lazy, Suspense} from 'react';
import {useTranslation} from 'react-i18next';
import {useIsVisible} from 'react-is-visible';
import {useLocalStorage} from 'react-use';

const TimeSeries = lazy(() =>
  import('./timeseries' /* webpackChunkName: "TimeSeries" */)
);

function TimeSeriesExplorer({
  timeseries,
  date: timelineDate,
  regionHighlighted,
  setRegionHighlighted,
  anchor,
  setAnchor,
  stateCodes,
}) {
  const {t} = useTranslation();
  const [timeseriesOption, setTimeseriesOption] = useState(
    TIMESERIES_OPTIONS.future.FUTURE_MONTH
  );
  const [chartType, setChartType] = useLocalStorage('chartType', 'total');
  const [isUniform, setIsUniform] = useLocalStorage('isUniform', true);
  const [isLog, setIsLog] = useLocalStorage('isLog', false);
  const explorerElement = useRef();
  const isVisible = useIsVisible(explorerElement, {once: true});

  const dates = useMemo(() => {
    const today = timelineDate || getIndiaTodayISO();
    let cutOffDate = today;
    let filteredDates = Object.keys(timeseries || {});
    if (timeseriesOption.past) {
      cutOffDate = formatISO(
        sub(parseIndiaDate(today), timeseriesOption.constraint),
        {
          representation: 'date',
        }
      );
      filteredDates = filteredDates.filter((date) => date <= today);

      if (cutOffDate !== today) {
        filteredDates = filteredDates.filter((date) => date >= cutOffDate);
      }
    } else if (timeseriesOption.future) {
      cutOffDate = formatISO(
        add(parseIndiaDate(today), timeseriesOption.constraint),
        {
          representation: 'date',
        }
      );

      filteredDates = filteredDates.filter((date) => date >= today);

      if (cutOffDate !== today) {
        filteredDates = filteredDates.filter((date) => date <= cutOffDate);
      }
    }

    return filteredDates.sort();
  }, [timeseries, timelineDate, timeseriesOption]);

  const handleChange = ({target}) => {
    setRegionHighlighted({
      stateCode: target.value,
      districtName: null,
    });
  };

  return (
    <div
      className={classnames('TimeSeriesExplorer', {
        stickied: anchor === 'timeseries',
      })}
      style={{display: anchor === 'mapexplorer' ? 'none' : ''}}
      ref={explorerElement}
    >
      <div className="timeseries-header">
        <div
          className={classnames('anchor', {
            stickied: anchor === 'timeseries',
          })}
          onClick={() => {
            setAnchor(anchor === 'timeseries' ? null : 'timeseries');
          }}
        >
        </div>

        <h1>{t('Trends')}</h1>
        <div className="tabs">
          {Object.entries(TIMESERIES_CHART_TYPES).map(([ctype, value]) => (
            <div
              className={`tab ${chartType === ctype ? 'focused' : ''}`}
              key={ctype}
              onClick={() => {
                setChartType(ctype);
              }}
            >
              <h4>{t(value)}</h4>
            </div>
          ))}
        </div>

        <div className="scale-modes">
          <label className="main">{t('Scale Modes')}</label>
          <div className="timeseries-mode">
            <label htmlFor="timeseries-mode">{t('Uniform')}</label>
            <input
              id="timeseries-mode"
              type="checkbox"
              className="switch"
              checked={isUniform}
              aria-label={t('Checked by default to scale uniformly.')}
              onChange={() => {
                setIsUniform(!isUniform);
              }}
            />
          </div>
          <div
            className={`timeseries-logmode ${
              chartType !== 'total' ? 'disabled' : ''
            }`}
          >
            <label htmlFor="timeseries-logmode">{t('Logarithmic')}</label>
            <input
              id="timeseries-logmode"
              type="checkbox"
              checked={chartType === 'total' && isLog}
              className="switch"
              disabled={chartType !== 'total'}
              onChange={() => {
                setIsLog(!isLog);
              }}
            />
          </div>
        </div>

        {stateCodes && (
          <div className="trends-state-name">
            <select value={regionHighlighted.stateCode} onChange={handleChange}>
              {stateCodes.map((stateCode) => {
                return (
                  <option value={stateCode} key={stateCode}>
                    {stateCode === 'TT'
                      ? t('All States')
                      : t(STATE_NAMES[stateCode])}
                  </option>
                );
              })}
            </select>
          </div>
        )}
      </div>

      <div className="pills">
        {Object.keys(TIMESERIES_OPTIONS).map((date, index) => (
          <div className={date} key={index}>
            {Object.values(TIMESERIES_OPTIONS[date]).map((option, i) => (
              <button
                key={i}
                type="button"
                className={classnames({selected: timeseriesOption === option})}
                onClick={() => setTimeseriesOption(option)}
              >
                {t(option.label)}
              </button>
            ))}
          </div>
        ))}
      </div>

      {isVisible && (
        <Suspense fallback={<TimeseriesLoader />}>
          <TimeSeries
            stateCode={regionHighlighted.stateCode}
            {...{timeseries, dates, chartType, isUniform, isLog, timelineDate}}
          />
        </Suspense>
      )}

      {/* <div className="alert">
        <IssueOpenedIcon size={24} />
        <div className="alert-right">
          {t('Tested chart is independent of uniform scaling')}
        </div>
      </div> */}
    </div>
  );
}

const isEqual = (prevProps, currProps) => {
  if (
    !equal(
      currProps.regionHighlighted.stateCode,
      prevProps.regionHighlighted.stateCode
    )
  ) {
    return false;
  }
  if (!equal(currProps.date, prevProps.date)) {
    return false;
  }
  if (!equal(currProps.anchor, prevProps.anchor)) {
    return false;
  }
  return true;
};

export default React.memo(TimeSeriesExplorer, isEqual);
