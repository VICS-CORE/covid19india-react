import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {formatDistance} from 'date-fns';
import {formatDate, formatDateAbsolute} from '../utils/common-functions';

import ResourcesTable from './res_table';
import ResourcesLevel from './res_level';
import ResourcesMap from './res_map';

const resources = [
  {
    name: 'beds',
    title: 'Beds',
    className: 'is-green',
    color: 'interpolateGreens',
  },
  {
    name: 'icu_beds',
    title: 'ICU Beds',
    className: 'is-orange',
    color: 'interpolateOranges',
  },
  {
    name: 'ventilators',
    title: 'Ventilators',
    className: 'is-cherry',
    color: 'interpolateReds',
  },
  {
    name: 'doctors',
    title: 'Doctors',
    className: 'is-blue',
    color: 'interpolateBlues',
  },
  {
    name: 'nurses',
    title: 'Nurses',
    className: 'is-purple',
    color: 'interpolatePurples',
  },
];

function Resources(props) {
  const [resourcesData, setResourcesData] = useState({});
  const [fetched, setFetched] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');
  const [regionHighlighted, setRegionHighlighted] = useState(undefined);

  useEffect(() => {
    if (fetched === false) {
      getResourcesData();
    }
  }, [fetched]);

  const getResourcesData = async () => {
    try {
      const [response] = await Promise.all([
        axios.get('https://demo6934508.mockable.io/med_resources.json'),
      ]);
      setResourcesData(response.data);
      setLastUpdated(response.data.last_updated_time);
      setFetched(true);
    } catch (err) {
      console.log(err);
    }
  };

  const onHighlightState = (state, index) => {
    if (!state && !index) setRegionHighlighted(null);
    else setRegionHighlighted({state, index});
  };
  const onHighlightDistrict = (district, state, index) => {
    if (!state && !index && !district) setRegionHighlighted(null);
    else setRegionHighlighted({district, state, index});
  };

  return (
    <React.Fragment>
      <div className="Home">
        <div className="home-left">
          <div className="header fadeInUp" style={{animationDelay: '1s'}}>
            <div className="header-mid">
              <div className="titles">
                <h1>Medical Resources</h1>
                <h6 style={{fontWeight: 600}}>
                  Proposed addition to covid tracker
                </h6>
              </div>
              <div className="last-update">
                <h6>Last Updated</h6>
                <h6 style={{color: '#28a745', fontWeight: 600}}>
                  {isNaN(Date.parse(formatDate(lastUpdated)))
                    ? ''
                    : formatDistance(
                        new Date(formatDate(lastUpdated)),
                        new Date()
                      ) + ' Ago'}
                </h6>
                <h6 style={{color: '#28a745', fontWeight: 600}}>
                  {isNaN(Date.parse(formatDate(lastUpdated)))
                    ? ''
                    : formatDateAbsolute(lastUpdated)}
                </h6>
              </div>
            </div>
          </div>

          <ResourcesLevel data={resourcesData} resources={resources}/>
          <ResourcesTable
            data={resourcesData}
            onHighlightState={onHighlightState}
            onHighlightDistrict={onHighlightDistrict}
          />
        </div>

        <div className="home-right">
          {fetched && (
            <React.Fragment>
              <ResourcesMap
                data={resourcesData}
                regionHighlighted={regionHighlighted}
                resources={resources}
              />
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Resources;
