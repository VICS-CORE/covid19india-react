import React, {useState, useEffect} from 'react';
import ResourcesRow from './res_row';

function ResourcesTable(props) {
  const [data, setData] = useState(props.data);
  const [revealedStates, setRevealedStates] = useState({});
  const [resourcesMeta, setResourceMeta] = useState(props.resourcesMeta);
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
        const sortColumn = resourcesMeta.find(
          (resource) => resource.name === sortData.sortColumn
        );
        let value1 = StateData1.timeline[date][sortColumn];
        let value2 = StateData2.timeline[date][sortColumn];

        if (sortColumn !== 'name') {
          value1 = parseInt(StateData1.timeline[date][sortColumn]);
          value2 = parseInt(StateData2.timeline[date][sortColumn]);
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
  }, [data, resourcesMeta, sortData.isAscending, sortData.sortColumn]);

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
        Numbers may not be accurate. For demo purpose only.
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
            <th className="sticky" onClick={(e) => handleSort(e, props)}>
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
            </th>
            <th className="sticky" onClick={(e) => handleSort(e, props)}>
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
            </th>
            <th className="sticky" onClick={(e) => handleSort(e, props)}>
              <div className="heading-content">
                <abbr
                  className={`${window.innerWidth <= 769 ? 'is-green' : ''}`}
                  title="Ventilators"
                >
                  {window.innerWidth <= 769
                    ? window.innerWidth <= 375
                      ? 'V'
                      : 'Vents'
                    : 'Ventilators'}
                </abbr>
                <div
                  className={
                    sortData.sortColumn === 'ventilators' ? 'sort-black' : ''
                  }
                ></div>
                <div
                  style={{
                    display:
                      sortData.sortColumn === 'ventilators'
                        ? 'initial'
                        : 'none',
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
            <th className="sticky" onClick={(e) => handleSort(e, props)}>
              <div className="heading-content">
                <abbr
                  className={`${window.innerWidth <= 769 ? 'is-gray' : ''}`}
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
            </th>
            <th className="sticky" onClick={(e) => handleSort(e, props)}>
              <div className="heading-content">
                <abbr
                  className={`${window.innerWidth <= 769 ? 'is-gray' : ''}`}
                  title="Nurses"
                >
                  {window.innerWidth <= 769
                    ? window.innerWidth <= 375
                      ? 'N'
                      : 'Nrs'
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
            </th>
          </tr>
        </thead>

        <tbody>
          {data.states &&
            data.states.map((state, index) => {
              // if (state.confirmed > 0) {
              return (
                <ResourcesRow
                  key={index}
                  index={index}
                  state={state}
                  total={false}
                  reveal={revealedStates[state.name]}
                  onHighlightState={props.onHighlightState}
                  onHighlightDistrict={props.onHighlightDistrict}
                  handleReveal={handleReveal}
                  date={date}
                />
              );
              // }
            })}
        </tbody>

        {/* <tbody>
          {data.states.length > 1  && (
            <ResourcesRow key={0} state={data.states.total} total={true} />
          )}
        </tbody> */}
      </table>
    </React.Fragment>
  );
}

export default ResourcesTable;
