import React, {useState, useEffect, useCallback} from 'react';
import * as Icon from 'react-feather';
import {RESOURCES_META} from '../constants';
import {formatNumber} from '../utils/common-functions';

function ResourcesRow(props) {
  const [state, setState] = useState(props.state);
  const [sortedDistricts, setSortedDistricts] = useState(
    props.state ? props.state.districts : []
  );
  const [sortData, setSortData] = useState({
    sortColumn: localStorage.getItem('resDistrict.sortColumn')
      ? localStorage.getItem('resDistrict.sortColumn')
      : 'beds',
    isAscending: localStorage.getItem('resDistrict.isAscending')
      ? localStorage.getItem('resDistrict.isAscending') === 'true'
      : false,
  });
  const [date, setDate] = useState(props.date);

  useEffect(() => {
    setState(props.state);
  }, [props.state]);

  const handleReveal = () => {
    props.handleReveal(props.state.name);
  };

  const sortDistricts = useCallback(
    (aDistricts) => {
      if (aDistricts) {
        const sorted = aDistricts.sort((district1, district2) => {
          const sortColumn = sortData.sortColumn;
          const value1 =
            sortColumn === 'name'
              ? district1.name
              : parseInt(district1.timeline[date][0]);
          const value2 =
            sortColumn === 'name'
              ? district2.name
              : parseInt(district2.timeline[date][0]);
          const comparisonValue =
            value1 > value2
              ? 1
              : value1 === value2 && district1.name > district2.name
              ? 1
              : -1;
          return sortData.isAscending ? comparisonValue : comparisonValue * -1;
        });
        // .forEach((key) => {
        //   sorted[key] = aDistricts[key];
        // });
        setSortedDistricts(sorted);
      }
    },
    [sortData.isAscending, sortData.sortColumn]
  );

  const sort = (column) => {
    const isAscending =
      sortData.sortColumn === column
        ? !sortData.isAscending
        : sortData.sortColumn === 'name';
    setSortData({
      sortColumn: column,
      isAscending: isAscending,
    });
    localStorage.setItem('resDistrict.sortColumn', column);
    localStorage.setItem('resDistrict.isAscending', isAscending);
  };

  useEffect(() => {
    sortDistricts(state.districts);
  }, [state, sortData, sortDistricts]);

  return (
    <React.Fragment>
      <tr
        onMouseEnter={() => props.onHighlightState?.(state, props.index)}
        onMouseLeave={() => props.onHighlightState?.()}
        touchstart={() => props.onHighlightState?.(state, props.index)}
        onClick={ handleReveal }
        style={{background: props.index % 2 === 0 ? '#f8f9fa' : ''}}
      >
        <td style={{fontWeight: 600}}>
          <div className="table__title-wrapper">
            <span
              className={`dropdown ${
                props.reveal ? 'rotateRightDown' : 'rotateDownRight'
              }`}
              onClick={() => {
                handleReveal();
              }}
            >
              <Icon.ChevronDown />
            </span>
            {state.name}
          </div>
        </td>
        {RESOURCES_META.map((resource, index) => {
          const capacity = state.timeline[date][resource.capacityIndex]
          const utilization = state.timeline[date][resource.utilizationIndex]
          return (
            <td key={resource.name}>
              <span className="table__count-text">
                {formatNumber(capacity - utilization)}
              </span>
              <span className="deltas">
                &nbsp; [ {formatNumber(capacity)} ]
              </span>
            </td>
          )
        })}
      </tr>

      <tr
        className={'state-last-update'}
        style={{display: props.reveal ? '' : 'none'}}
      >
        <td colSpan={2}>
          <div className="last-update">
            <h6>Last Updated&nbsp;</h6>
            <h6
              title={
                ''
                // isNaN(Date.parse(formatDate(props.state.lastupdatedtime)))
                //   ? ''
                //   : formatDateAbsolute(props.state.lastupdatedtime)
              }
            >
              {/* {isNaN(Date.parse(formatDate(props.state.lastupdatedtime)))
                ? ''
                : `${formatDistance(
                    new Date(formatDate(props.state.lastupdatedtime)),
                    new Date()
                  )} Ago`} */}
            </h6>
          </div>
        </td>
      </tr>

      <tr
        className={`district-heading`}
        style={{display: props.reveal ? '' : 'none'}}
      >
        <td onClick={(e) => sort('district')}>
          <div className="heading-content">
            <abbr title="District">District</abbr>
            <div
              style={{
                display:
                  sortData.sortColumn === 'district' ? 'initial' : 'none',
              }}
            >
              {sortData.isAscending ? (
                <div className="arrow-up" />
              ) : (
                <div className="arrow-down" />
              )}
            </div>
          </div>
        </td>
        {RESOURCES_META.map((resource, index) => {
          return (
            <td key={resource.name} onClick={(e) => sort(resource.name)}>
              <div className="heading-content">
                <abbr className={`${window.innerWidth <= 769 ? resource.className : ''}`} title={resource.name}>
                  {window.innerWidth <= 769
                    ? window.innerWidth <= 375
                      ? resource.title.charAt(0)
                      : resource.title
                    : resource.title}
                </abbr>
                <div style={{display: sortData.sortColumn === resource.name ? 'initial' : 'none'}}>
                  {sortData.isAscending ? <div className="arrow-up" /> : <div className="arrow-down" />}
                </div>
              </div>
            </td>
          )
        })}
      </tr>
      {sortedDistricts &&
        sortedDistricts
          .filter((district) => district.name.toLowerCase() !== 'unknown')
          .map((district, index) => {
            if (district.name.toLowerCase() !== 'unknown') {
              return (
                <tr
                  key={index}
                  className={`district`}
                  style={{
                    display: props.reveal ? '' : 'none',
                    background: index % 2 === 0 ? '#f8f9fa' : '',
                  }}
                  onMouseEnter={() =>
                    props.onHighlightDistrict?.(district, state, props.index)
                  }
                  onMouseLeave={() => props.onHighlightDistrict?.()}
                  touchstart={() =>
                    props.onHighlightDistrict?.(district, state, props.index)
                  }
                >
                  <td style={{fontWeight: 600}}>{district.name}</td>
                  {RESOURCES_META.map((resource, index) => {
                    const capacity = district.timeline[date][resource.capacityIndex]
                    const utilization = district.timeline[date][resource.utilizationIndex]
                    return (
                      <td key={resource.name}>
                        <span className="table__count-text">
                          {formatNumber(capacity - utilization)}
                        </span>
                        <span className="deltas">
                          &nbsp; [ {formatNumber(capacity)} ]
                        </span>
                      </td>
                    )
                  })}
                </tr>
              );
            }
            return null;
          })}

      {sortedDistricts?.Unknown && (
        <tr
          className={`district`}
          style={{display: props.reveal ? '' : 'none'}}
        >
          <td style={{fontWeight: 600}}>Unknown</td>
          <td>
          </td>
        </tr>
      )}

      <tr
        className={`spacer`}
        style={{display: props.reveal ? '' : 'none'}}
      >
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </React.Fragment>
  );
}

export default ResourcesRow;
