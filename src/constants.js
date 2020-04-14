export const MAP_TYPES = {
  COUNTRY: 'country',
  STATE: 'state',
};

export const MAPS_DIR = '/maps';

export const RESOURCES_META = [
  {
    name: 'beds',
    title: 'Beds',
    className: 'is-green',
    color: 'interpolateGreens',
    capacityIndex: 0,
    utilizationIndex: 5,
  },
  {
    name: 'icu_beds',
    title: 'ICU Beds',
    className: 'is-orange',
    color: 'interpolateOranges',
    capacityIndex: 1,
    utilizationIndex: 6,
  },
  {
    name: 'ventilators',
    title: 'Ventilators',
    className: 'is-cherry',
    color: 'interpolateReds',
    capacityIndex: 2,
    utilizationIndex: 7,
  },
  {
    name: 'doctors',
    title: 'Doctors',
    className: 'is-blue',
    color: 'interpolateBlues',
    capacityIndex: 3,
    utilizationIndex: 8,
  },
  {
    name: 'nurses',
    title: 'Nurses',
    className: 'is-purple',
    color: 'interpolatePurples',
    capacityIndex: 4,
    utilizationIndex: 9,
  },
];
