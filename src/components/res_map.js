import React, {useState, useEffect, useMemo, useCallback} from 'react';
import ChoroplethMap from './choropleth';
import {MAP_TYPES, MAPS_DIR} from '../constants';
import {
  formatDate,
  formatDateAbsolute,
  formatNumber,
} from '../utils/common-functions';
import {formatDistance} from 'date-fns';

const mapMeta = {
  India: {
    name: 'India',
    geoDataFile: `${MAPS_DIR}/india.json`,
    mapType: MAP_TYPES.COUNTRY,
    graphObjectName: 'india',
  },
  'Andaman and Nicobar Islands': {
    name: 'Andaman and Nicobar Islands',
    geoDataFile: `${MAPS_DIR}/andamannicobarislands.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'andamannicobarislands_district',
  },
  'Arunachal Pradesh': {
    name: 'Arunachal Pradesh',
    geoDataFile: `${MAPS_DIR}/arunachalpradesh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'arunachalpradesh_district',
  },
  'Andhra Pradesh': {
    name: 'Andhra Pradesh',
    geoDataFile: `${MAPS_DIR}/andhrapradesh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'andhrapradesh_district',
  },

  Assam: {
    name: 'Assam',
    geoDataFile: `${MAPS_DIR}/assam.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'assam_district',
  },
  Bihar: {
    name: 'Bihar',
    geoDataFile: `${MAPS_DIR}/bihar.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'bihar_district',
  },
  Chhattisgarh: {
    name: 'Chhattisgarh',
    geoDataFile: `${MAPS_DIR}/chhattisgarh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'chhattisgarh_district',
  },
  Delhi: {
    name: 'Delhi',
    geoDataFile: `${MAPS_DIR}/delhi.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'delhi_district',
  },
  Karnataka: {
    name: 'Karnataka',
    geoDataFile: `${MAPS_DIR}/karnataka.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'karnataka_district',
  },
  Kerala: {
    name: 'Kerala',
    geoDataFile: `${MAPS_DIR}/kerala.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'kerala_district',
  },
  Goa: {
    name: 'Goa',
    geoDataFile: `${MAPS_DIR}/goa.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'goa_district',
  },
  Gujarat: {
    name: 'Gujarat',
    geoDataFile: `${MAPS_DIR}/gujarat.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'gujarat_district',
  },
  Haryana: {
    name: 'Haryana',
    geoDataFile: `${MAPS_DIR}/haryana.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'haryana_district',
  },
  'Himachal Pradesh': {
    name: 'Himachal Pradesh',
    geoDataFile: `${MAPS_DIR}/himachalpradesh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'himachalpradesh_district',
  },
  'Jammu and Kashmir': {
    name: 'Jammu and Kashmir',
    geoDataFile: `${MAPS_DIR}/jammukashmir.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'jammukashmir_district',
  },
  Jharkhand: {
    name: 'Jharkhand',
    geoDataFile: `${MAPS_DIR}/jharkhand.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'jharkhand_district',
  },
  Ladakh: {
    name: 'Ladakh',
    geoDataFile: `${MAPS_DIR}/ladakh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'ladakh_district',
  },
  'Madhya Pradesh': {
    name: 'Madhya Pradesh',
    geoDataFile: `${MAPS_DIR}/madhyapradesh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'madhyapradesh_district',
  },
  Maharashtra: {
    name: 'Maharashtra',
    geoDataFile: `${MAPS_DIR}/maharashtra.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'maharashtra_district',
  },
  Manipur: {
    name: 'Manipur',
    geoDataFile: `${MAPS_DIR}/manipur.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'manipur_district',
  },
  Meghalaya: {
    name: 'Meghalaya',
    geoDataFile: `${MAPS_DIR}/meghalaya.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'meghalaya_district',
  },
  Mizoram: {
    name: 'Mizoram',
    geoDataFile: `${MAPS_DIR}/mizoram.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'mizoram_district',
  },
  Nagaland: {
    name: 'Nagaland',
    geoDataFile: `${MAPS_DIR}/nagaland.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'nagaland_district',
  },
  Odisha: {
    name: 'Odisha',
    geoDataFile: `${MAPS_DIR}/odisha.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'odisha_district',
  },
  Punjab: {
    name: 'Punjab',
    geoDataFile: `${MAPS_DIR}/punjab.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'punjab_district',
  },
  Rajasthan: {
    name: 'Rajasthan',
    geoDataFile: `${MAPS_DIR}/rajasthan.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'rajasthan_district',
  },
  Sikkim: {
    name: 'Sikkim',
    geoDataFile: `${MAPS_DIR}/sikkim.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'sikkim_district',
  },
  'Tamil Nadu': {
    name: 'Tamil Nadu',
    geoDataFile: `${MAPS_DIR}/tamil-nadu.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'tamilnadu_district',
  },
  Telangana: {
    name: 'Telangana',
    geoDataFile: `${MAPS_DIR}/telangana.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'telangana_district',
  },
  Tripura: {
    name: 'Tripura',
    geoDataFile: `${MAPS_DIR}/tripura.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'tripura_district',
  },
  Uttarakhand: {
    name: 'Uttarakhand',
    geoDataFile: `${MAPS_DIR}/uttarakhand.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'uttarakhand_district',
  },
  'Uttar Pradesh': {
    name: 'Uttar Pradesh',
    geoDataFile: `${MAPS_DIR}/uttarpradesh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'uttarpradesh_district',
  },

  'West Bengal': {
    name: 'West Bengal',
    geoDataFile: `${MAPS_DIR}/westbengal.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'westbengal_district',
  },
};

export default function ({data, regionHighlighted, resources}) {
  const [selectedRegion, setSelectedRegion] = useState({});
  const [currentHoveredRegion, setCurrentHoveredRegion] = useState({});
  const [currentMap, setCurrentMap] = useState(mapMeta.India);
  const [currentResource, setCurrentResource] = useState(resources[0]);

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
      maxResource: 0,
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
      const total = parseInt(state.total[currentResource.name]);

      statistic.total += total;
      statistic.maxResource =
        total > statistic.maxResource ? total : statistic.maxResource;

      acc[state.name] = total;
      return acc;
    }, {});

    return [statistic, currentMapData];
  }, [currentMap, data, currentResource]);

  const setHoveredRegion = useCallback(
    (name, currentMap) => {
      if (currentMap.mapType === MAP_TYPES.COUNTRY) {
        const filteredData = data.states.filter((state) => {
          return name === state.name;
        });
        if (filteredData.length === 1) {
          setCurrentHoveredRegion(filteredData[0]);
        } else {
          setCurrentHoveredRegion({});
        }
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
      const newMap = mapMeta['India'];
      setCurrentMap(newMap);
      const region = regionHighlighted.state;
      setCurrentHoveredRegion(region);
      setSelectedRegion(region.name);
    } else {
      const newMap = mapMeta[regionHighlighted.state.state];
      if (!newMap) {
        return;
      }
      setCurrentMap(newMap);
      setHoveredRegion(regionHighlighted.district, newMap);
      setSelectedRegion(regionHighlighted.district);
    }
  }, [regionHighlighted, currentMap.mapType, setHoveredRegion]);

  // const getRegionFromDistrict = (districtData, name) => {
  //   if (!districtData) {
  //     return;
  //   }
  //   const region = {...districtData};
  //   if (!region.name) {
  //     region.name = name;
  //   }
  //   return region;
  // };

  // const getRegionFromState = (state) => {
  //   if (!state) {
  //     return;
  //   }
  //   const region = {...state};
  //   if (!region.name) {
  //     region.name = region.state;
  //   }
  //   return region;
  // };

  const switchMapToState = useCallback(
    (name) => {
      const newMap = mapMeta[name];
      if (!newMap) {
        return;
      }
      setCurrentMap(newMap);
      if (newMap.mapType === MAP_TYPES.COUNTRY) {
        setHoveredRegion(data.states[0].name, newMap);
      } else if (newMap.mapType === MAP_TYPES.STATE) {
        const _stateObj = data.states.filter((t) => {
          return t.name === name;
        });

        if (_stateObj.length === 1) {
          const stateObj = _stateObj[0];
          // let districtData = stateObj.districts.filter((t) => {
          //  return t.name === name;
          // })[0];
          const topDistrict = stateObj.districts
            .filter((state) => state.name !== 'Unknown')
            .sort((a, b) => {
              return a.total.beds - b.total.beds;
            })[0];
          setHoveredRegion(topDistrict, newMap);
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
          for more details
        </h6>
      </div>

      <div className="map-stats">
        {resources.map((resource, index) => {
          const className = 'stats fadeInUp ' + resource.className;
          return (
            <div
              key={resource.name}
              className={className}
              style={{animationDelay: '2s'}}
              onClick={() => changeResource(resource)}
            >
              <h5>{resource.title}</h5>
              <div className="stats-bottom">
                <h1>
                  {(currentHoveredRegion.total &&
                    formatNumber(currentHoveredRegion.total[resource.name])) ||
                    '-'}
                </h1>
                <h6>{}</h6>
              </div>
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

        {currentMap.mapType === MAP_TYPES.STATE &&
        currentMapData.Unknown > 0 ? (
          <h4 className="unknown">
            Districts unknown for {currentMapData.Unknown} people
          </h4>
        ) : null}

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
      />
    </div>
  );
}
