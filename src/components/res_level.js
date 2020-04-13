import React, {useState, useEffect} from 'react';
import {formatNumber} from '../utils/common-functions';
import {featureFlags} from '../conf/settings';

function ResourcesLevel(props) {
  const [data, setData] = useState(props.data);
  const [resourcesMeta, setResourcesMeta] = useState(props.resourcesMeta);
  const [total, setTotal] = useState({});
  const [date, setDate] = useState(props.date);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  useEffect(() => {
    const parseData = () => {
      setTotal(data.timeline[date]);
    };
    if (data.last_updated_time) {
      parseData();
    }
  }, [data]);

  return (
    <div className="Level">
      {resourcesMeta.map((resource, index) => {
        const className = 'level-item fadeInUp ' + resource.className;
        const utilization = total[resource.utilizationIndex];
        const capacity = total[resource.capacityIndex];
        return (
          <div
            key={resource.name}
            className={className}
            style={{animationDelay: '1s'}}
          >
            <h5 className='heading'>{resource.title}</h5>
            {featureFlags.showUtilization && utilization &&
              <span>
                <h1 className='title'>{formatNumber(capacity - utilization)}</h1>
                <h5>[ {formatNumber(capacity)} ]</h5>
              </span>
            }
            {!featureFlags.showUtilization && <h1 className='title'>{formatNumber(capacity)}</h1> }
          </div>
        );
      })}
    </div>
  )
}

export default ResourcesLevel;
