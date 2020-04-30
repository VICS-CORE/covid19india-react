import React, {useState, useEffect, useMemo, useCallback} from 'react';
import ChoroplethMap from './choropleth';
import {MAP_TYPES, MAP_META} from '../constants';
import {
  formatDate,
  formatDateAbsolute,
  formatNumber,
} from '../utils/common-functions';
import {formatDistance} from 'date-fns';

export default function ({data, regionHighlighted, resourcesMeta, currentDate, flags}) {
  const [selectedRegion, setSelectedRegion] = useState({});
  const [currentHoveredRegion, setCurrentHoveredRegion] = useState({});
  const [currentMap, setCurrentMap] = useState(MAP_META.India);
  const [currentResource, setCurrentResource] = useState(resourcesMeta[0]);
  const [date, setDate] = useState(currentDate);
  const [featureFlags, setFeatureFlags] = useState(flags);

  useEffect(() => {
    const region = data.states[0];
    setCurrentHoveredRegion(region);
  }, [data]);

  if (!currentHoveredRegion) {
    return null;
  }

  const [statistic, currentMapData] = useMemo(() => {
    const statistic = {
      total: 0,
      max: 0,
    };
    let currentMapData = {};
    let _stats = {};

    if (currentMap.mapType === MAP_TYPES.COUNTRY) {
      _stats = data.states;
    } else if (currentMap.mapType === MAP_TYPES.STATE) {
      _stats = data.states.filter((t) => {
        return t.name === currentMap.name;
      })[0];

      _stats = _stats.districts;
    }

    currentMapData = _stats.reduce((acc, state) => {
      const capacity = parseInt(state.timeline[date][currentResource.capacityIndex]) || 1;

      if(featureFlags.showUtilization){
        const utilization = parseInt(state.timeline[date][currentResource.utilizationIndex]);
        const utilizationRatio = (utilization/capacity)*100;
        statistic.total += utilizationRatio;
        statistic.max =
          utilizationRatio > statistic.max ? utilizationRatio : statistic.max;

        acc[state.name] = utilizationRatio;
      }
      else{
        statistic.total += capacity;
        statistic.max = capacity > statistic.max ? capacity : statistic.max;
        acc[state.name] = capacity;
      }
      return acc;
    }, {});

    return [statistic, currentMapData];
  }, [currentMap, data, currentResource]);

  const setHoveredRegion = useCallback(
    (name, currentMap) => {
      if (currentMap.mapType === MAP_TYPES.COUNTRY) {
        const filteredData = data.states.filter((state) => {
          return name === state.name;
        })[0];
        setCurrentHoveredRegion(filteredData || {});
      } else if (currentMap.mapType === MAP_TYPES.STATE) {
        const stateObj = data.states.filter((t) => {
          return t.name === currentMap.name;
        })[0];
        let districtData = stateObj.districts.filter((t) => {
          return t.name === name;
        })[0];
        if (!districtData) {
          districtData = {
            name: 'Unknown',
            total: {
              beds: 0,
              icu_beds: 0,
              ventilators: 0,
              doctors: 0,
              nurses: 0,
            },
          };
        }
        setCurrentHoveredRegion(districtData);
      }
    },
    [data]
  );

  useEffect(() => {
    if (regionHighlighted === undefined) {
      return;
    } else if (regionHighlighted === null) {
      setSelectedRegion(null);
      return;
    }
    const isState = !('district' in regionHighlighted);
    if (isState) {
      const newMap = MAP_META['India'];
      setCurrentMap(newMap);
      const region = regionHighlighted.state;
      setCurrentHoveredRegion(region);
      setSelectedRegion(region.name);
    } else {
      const newMap = MAP_META[regionHighlighted.state.state];
      if (!newMap) {
        return;
      }
      setCurrentMap(newMap);
      setHoveredRegion(regionHighlighted.district, newMap);
      setSelectedRegion(regionHighlighted.district);
    }
  }, [regionHighlighted, currentMap.mapType, setHoveredRegion]);

  const switchMapToState = useCallback(
    (name) => {
      const newMap = MAP_META[name];
      if (!newMap) {
        return;
      }
      setCurrentMap(newMap);
      if (newMap.mapType === MAP_TYPES.COUNTRY) {
        setHoveredRegion(data.states[0].name, newMap);
      } else if (newMap.mapType === MAP_TYPES.STATE) {
        const stateObj = data.states.filter((t) => {
          return t.name === name;
        })[0];

        if (stateObj) {
          const topDistrict = stateObj.districts
            .filter((state) => state.name !== 'Unknown')
            .sort((a, b) => {
              return a.timeline[date][currentResource.capacityIndex] - b.timeline[date][currentResource.capacityIndex];
            })[0];
          setHoveredRegion(topDistrict.name, newMap);
        }
      }
    },
    [setHoveredRegion, data]
  );

  const changeResource = useCallback((resource) => {
    setCurrentResource(resource);
  }, []);

  const {name, lastupdatedtime} = currentHoveredRegion;

  return (
    <div className="MapExplorer fadeInUp" style={{animationDelay: '1.5s'}}>
      <div className="header">
        <h1>{currentMap.name}</h1>
        <h6>
          {window.innerWidth <= 769 ? 'Tap' : 'Hover'} over a{' '}
          {currentMap.mapType === MAP_TYPES.COUNTRY ? 'state/ut' : 'district'}{' '}
          to see the availability of resources
        </h6>
      </div>

      <div className="map-stats">
        {resourcesMeta.map((resource, index) => {
          const className = 'stats fadeInUp ' + resource.className;
          const capacity = currentHoveredRegion.timeline && currentHoveredRegion.timeline[date][resource.capacityIndex];
          const utilization = currentHoveredRegion.timeline && currentHoveredRegion.timeline[date][resource.utilizationIndex];
          return (
            <div
              key={resource.name}
              className={className}
              style={{animationDelay: '2s'}}
              onClick={() => changeResource(resource)}
            >
              <h5>{resource.title}</h5>
              { featureFlags.showUtilization &&
                <React.Fragment>
                  <div className="stats-bottom">
                    <h1>{ formatNumber(capacity - utilization) }</h1>
                  </div>
                  <div>
                    <h6>&nbsp;[{formatNumber(capacity)}]</h6>
                  </div>
                </React.Fragment>
              }
              { !featureFlags.showUtilization &&
                <div className="stats-bottom">
                  <h1>{ formatNumber(capacity) }</h1>
                </div>
              }
            </div>
          );
        })}
      </div>

      <div className="meta fadeInUp" style={{animationDelay: '2.5s'}}>
        <h2>{name}</h2>
        {lastupdatedtime && (
          <div
            className={`last-update ${
              currentMap.mapType === MAP_TYPES.STATE
                ? 'district-last-update'
                : 'state-last-update'
            }`}
          >
            <h6>Last Updated</h6>
            <h3
              title={
                isNaN(Date.parse(formatDate(lastupdatedtime)))
                  ? ''
                  : formatDateAbsolute(lastupdatedtime)
              }
            >
              {isNaN(Date.parse(formatDate(lastupdatedtime)))
                ? ''
                : formatDistance(
                    new Date(formatDate(lastupdatedtime)),
                    new Date()
                  ) + ' Ago'}
            </h3>
          </div>
        )}

        {currentMap.mapType === MAP_TYPES.STATE ? (
          <div
            className="button back-button"
            onClick={() => switchMapToState('India')}
          >
            Back
          </div>
        ) : null}
      </div>

      <ChoroplethMap
        statistic={statistic}
        mapMeta={currentMap}
        mapData={currentMapData}
        setHoveredRegion={setHoveredRegion}
        changeMap={switchMapToState}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        currentResource={currentResource}
        flags={featureFlags}
      />
    </div>
  );
}
