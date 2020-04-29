import React, {useState, useEffect} from 'react';
import ResourcesRow from './res_row';
import {RESOURCES_META} from '../constants';

function ResourcesTable(props) {
  const [data, setData] = useState(props.data);
  const [revealedStates, setRevealedStates] = useState({});
  const [date, setDate] = useState(props.date);
  const [sortData, setSortData] = useState({
    sortColumn: localStorage.getItem('resState.sortColumn')
      ? localStorage.getItem('resState.sortColumn')
      : 'beds',
    isAscending: localStorage.getItem('resState.isAscending')
      ? localStorage.getItem('resState.isAscending') === 'true'
      : false,
  });

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  useEffect(() => {
    const doSort = (e, props) => {
      data.states.sort((StateData1, StateData2) => {
        const sortColumn = RESOURCES_META.find(
          (resource) => resource.name === sortData.sortColumn
        );
        let value1 = StateData1.timeline[date][sortColumn.capacityIndex];
        let value2 = StateData2.timeline[date][sortColumn.capacityIndex];

        if (sortColumn !== 'name') {
          value1 = parseInt(StateData1.timeline[date][sortColumn.capacityIndex]);
          value2 = parseInt(StateData2.timeline[date][sortColumn.capacityIndex]);
        }

        if (sortData.isAscending) {
          return value1 > value2
            ? 1
            : value1 === value2 && StateData1['name'] > StateData2['name']
            ? 1
            : -1;
        } else {
          return value1 < value2
            ? 1
            : value1 === value2 && StateData1['name'] > StateData2['name']
            ? 1
            : -1;
        }
      });
    };

    if (data.last_updated_time) {
      setRevealedStates(
        data.states.reduce((a, state) => {
          return {...a, [state.name]: false};
        }, {})
      );
      doSort();
    }
  }, [data, RESOURCES_META, sortData.isAscending, sortData.sortColumn]);

  const handleSort = (e, props) => {
    const currentsortColumn = e.currentTarget
      .querySelector('abbr')
      .getAttribute('title')
      .toLowerCase();
    const isAscending =
      sortData.sortColumn === currentsortColumn
        ? !sortData.isAscending
        : sortData.sortColumn === 'name';
    setSortData({
      sortColumn: currentsortColumn,
      isAscending: isAscending,
    });
    localStorage.setItem('resState.sortColumn', currentsortColumn);
    localStorage.setItem('resState.isAscending', isAscending);
  };

  const handleReveal = (state) => {
    setRevealedStates({
      ...revealedStates,
      [state]: !revealedStates[state],
    });
  };

  return (
    <React.Fragment>
      <h5 className="table-fineprint fadeInUp" style={{animationDelay: '1.5s'}}>
        <a href="https://demo6934508.mockable.io/med_resources_timeline.json" target="_blank" > Demo data </a>
        & <a href="https://vics-core.github.io/covid-api/medresources/timeline.json" target="_blank"> Collected data </a>
        ( Data collection is in progress )
      </h5>
      <table className="table fadeInUp" style={{animationDelay: '1.8s'}}>
        <thead>
          <tr>
            <th
              className="sticky state-heading"
              onClick={(e) => handleSort(e, props)}
            >
              <div className="heading-content">
                <abbr title="State">State/UT</abbr>
                <div
                  style={{
                    display:
                      sortData.sortColumn === 'name' ? 'initial' : 'none',
                  }}
                >
                  {sortData.isAscending ? (
                    <div className="arrow-up" />
                  ) : (
                    <div className="arrow-down" />
                  )}
                </div>
              </div>
            </th>
            {RESOURCES_META.map((resource, index) => {
              return (
                <th key={resource.name} className="sticky" onClick={(e) => handleSort(e, props)}>
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
                </th>
              )
            })}
          </tr>
        </thead>

        <tbody>
          {data.states &&
            data.states.map((state, index) => {
              return (
                <ResourcesRow
                  key={index}
                  index={index}
                  state={state}
                  reveal={revealedStates[state.name]}
                  onHighlightState={props.onHighlightState}
                  onHighlightDistrict={props.onHighlightDistrict}
                  handleReveal={handleReveal}
                  date={date}
                />
              );
            })}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default ResourcesTable;
