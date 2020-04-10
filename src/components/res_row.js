import React, {useState, useEffect, useCallback} from 'react';
import * as Icon from 'react-feather';
import {formatDate, formatDateAbsolute} from '../utils/common-functions';
import {formatDistance} from 'date-fns';
import {Link} from 'react-router-dom';

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
                : parseInt(district1.total.beds);
            const value2 =
              sortColumn === 'name'
                ? district2.name
                : parseInt(district2.total.beds);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            const comparisonValue =
              value1 > value2
                ? 1
                : value1 === value2 && district1.name > district2.name
                ? 1
                : -1;
            return sortData.isAscending
              ? comparisonValue
              : comparisonValue * -1;
          });
          // .forEach((key) => {
          //   sorted[key] = aDistricts[key];
          // });
        setSortedDistricts(sorted);
      }
    },
    [sortData.isAscending, sortData.sortColumn]
  );

  const handleSort = (column) => {
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
        className={props.total ? 'state is-total' : 'state'}
        onMouseEnter={() => props.onHighlightState?.(state, props.index)}
        onMouseLeave={() => props.onHighlightState?.()}
        touchstart={() => props.onHighlightState?.(state, props.index)}
        onClick={!props.total ? handleReveal : null}
        style={{background: props.index % 2 === 0 ? '#f8f9fa' : ''}}
      >
        <td style={{fontWeight: 600}}>
          <div className="table__title-wrapper">
            <span
              className={`dropdown ${
                props.reveal ? 'rotateRightDown' : 'rotateDownRight'
              }`}
              style={{display: !props.total ? '' : 'none'}}
              onClick={() => {
                handleReveal();
              }}
            >
              <Icon.ChevronDown />
            </span>
            {state.name}
            {state.name === 'West Bengal' && (
              <Link to="/faq">
                <Icon.HelpCircle className="height-22" />
              </Link>
            )}
          </div>
        </td>
        <td>
          {/* <span className="deltas" style={{color: '#ff073a'}}>
            {state.deltaconfirmed > 0 && <Icon.ArrowUp />}
            {state.deltaconfirmed > 0 ? `${state.deltaconfirmed}` : ''}
          </span> */}
          <span className="table__count-text">
            {parseInt(state.total.beds) === 0 ? '-' : state.total.beds}
          </span>
        </td>
        <td
          style={{color: parseInt(state.total.icu_beds) === 0 ? '#B5B5B5' : 'inherit'}}
        >
          {/* <span className="deltas" style={{color: '#007bff'}}>
            {!state.delta.active==0 && <Icon.ArrowUp/>}
            {state.delta.active>0 ? `${state.delta.active}` : ''}
          </span>*/}
          {parseInt(state.total.icu_beds) === 0 ? '-' : state.total.icu_beds}
        </td>
        <td
          style={{
            color: parseInt(state.total.ventilators) === 0 ? '#B5B5B5' : 'inherit',
          }}
        >
          {/* <span className="deltas" style={{color: '#28a745'}}>
            {state.deltarecovered > 0 && <Icon.ArrowUp />}
            {state.deltarecovered > 0 ? `${state.deltarecovered}` : ''}
          </span> */}
          <span className="table__count-text">
            {parseInt(state.total.ventilators) === 0 ? '-' : state.total.ventilators}
          </span>
        </td>
        <td
          style={{color: parseInt(state.total.doctors) === 0 ? '#B5B5B5' : 'inherit'}}
        >
          {/* <span className="deltas" style={{color: '#6c757d'}}>
            {state.deltadeaths > 0 && <Icon.ArrowUp />}
            {state.deltadeaths > 0 ? `${state.deltadeaths}` : ''}
          </span> */}
          <span className="table__count-text">
            {parseInt(state.total.doctors) === 0 ? '-' : state.total.doctors}
          </span>
        </td>
        <td
          style={{color: parseInt(state.total.nurses) === 0 ? '#B5B5B5' : 'inherit'}}
        >
          {/* <span className="deltas" style={{color: '#6c757d'}}>
            {state.deltadeaths > 0 && <Icon.ArrowUp />}
            {state.deltadeaths > 0 ? `${state.deltadeaths}` : ''}
          </span> */}
          <span className="table__count-text">
            {parseInt(state.total.nurses) === 0 ? '-' : state.total.nurses}
          </span>
        </td>
      </tr>

      <tr
        className={'state-last-update'}
        style={{display: props.reveal && !props.total ? '' : 'none'}}
      >
        <td colSpan={2}>
          <div className="last-update">
            <h6>Last Updated&nbsp;</h6>
            <h6
              title={''
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
        style={{display: props.reveal && !props.total ? '' : 'none'}}
      >
        <td onClick={(e) => handleSort('district')}>
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
        <td onClick={(e) => handleSort('beds')}>
          <div className="heading-content">
            <abbr
              className={`${window.innerWidth <= 769 ? 'is-cherry' : ''}`}
              title="Beds"
            >
              {window.innerWidth <= 769
                ? window.innerWidth <= 375
                  ? 'B'
                  : 'Beds'
                : 'Beds'}
            </abbr>
            <div
              style={{
                display:
                  sortData.sortColumn === 'beds' ? 'initial' : 'none',
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
        <td onClick={(e) => handleSort('icu_beds')}>
          <div className="heading-content">
            <abbr
              className={`${window.innerWidth <= 769 ? 'is-blue' : ''}`}
              title="ICU Beds"
            >
              {window.innerWidth <= 769
                ? window.innerWidth <= 375
                  ? 'I'
                  : 'ICU'
                : 'ICU Beds'}
            </abbr>
            <div
              style={{
                display:
                  sortData.sortColumn === 'icu_beds' ? 'initial' : 'none',
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
        <td onClick={(e) => handleSort('ventilators')}>
          <div className="heading-content">
            <abbr
              className={`${window.innerWidth <= 769 ? 'is-blue' : ''}`}
              title="Ventilators"
            >
              {window.innerWidth <= 769
                ? window.innerWidth <= 375
                  ? 'V'
                  : 'Vents'
                : 'Ventilators'}
            </abbr>
            <div
              style={{
                display:
                  sortData.sortColumn === 'ventilators' ? 'initial' : 'none',
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
        <td onClick={(e) => handleSort('beds')}>
          <div className="heading-content">
            <abbr
              className={`${window.innerWidth <= 769 ? 'is-green' : ''}`}
              title="Doctors"
            >
              {window.innerWidth <= 769
                ? window.innerWidth <= 375
                  ? 'D'
                  : 'Docs'
                : 'Doctors'}
            </abbr>
            <div
              style={{
                display:
                  sortData.sortColumn === 'doctors' ? 'initial' : 'none',
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
        <td onClick={(e) => handleSort('nurses')}>
          <div className="heading-content">
            <abbr
              className={`${window.innerWidth <= 769 ? 'is-green' : ''}`}
              title="Beds"
            >
              {window.innerWidth <= 769
                ? window.innerWidth <= 375
                  ? 'N'
                  : 'Nurs'
                : 'Nurses'}
            </abbr>
            <div
              style={{
                display:
                  sortData.sortColumn === 'nurses' ? 'initial' : 'none',
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
                    display: props.reveal && !props.total ? '' : 'none',
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
                  <td>
                    <span className="table__count-text">
                      {district.total.beds}
                    </span>
                  </td>
                  <td>
                    <span className="table__count-text">
                      {district.total.icu_beds}
                    </span>
                  </td>
                  <td>
                    <span className="table__count-text">
                      {district.total.ventilators}
                    </span>
                  </td>
                  <td>
                    <span className="table__count-text">
                      {district.total.doctors}
                    </span>
                  </td>
                  <td>
                    <span className="table__count-text">
                      {district.total.nurses}
                    </span>
                  </td>
                </tr>
              );
            }
            return null;
          })}

      {sortedDistricts?.Unknown && (
        <tr
          className={`district`}
          style={{display: props.reveal && !props.total ? '' : 'none'}}
        >
          <td style={{fontWeight: 600}}>Unknown</td>
          <td>
            {/* <span className="deltas" style={{color: '#ff073a'}}>
              {sortedDistricts['Unknown'].delta.confirmed > 0 && (
                <Icon.ArrowUp />
              )}
              {sortedDistricts['Unknown'].delta.confirmed > 0
                ? `${sortedDistricts['Unknown'].delta.confirmed}`
                : ''}
            </span> */}
            {/* <span className="table__count-text">
              {sortedDistricts['Unknown'].confirmed}
            </span> */}
          </td>
        </tr>
      )}

      <tr
        className={`spacer`}
        style={{display: props.reveal && !props.total ? '' : 'none'}}
      >
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </React.Fragment>
  );
}

export default ResourcesRow;
