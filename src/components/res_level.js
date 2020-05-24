import React, {useState, useEffect} from 'react';
import {formatNumber} from '../utils/common-functions';

function ResourcesLevel(props) {
  const [data, setData] = useState(props.data);
  const [resourcesMeta] = useState(props.resourcesMeta);
  const [total, setTotal] = useState({});
  const [date] = useState(props.date);
  const [featureFlags] = useState(props.featureFlags);

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
  }, [data, date]);

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
            <h5>{resource.title}</h5>
            {featureFlags.showUtilization && (
              <React.Fragment>
                <h1>{formatNumber(capacity - utilization)}</h1>
                <h5 className="capacity">[ {formatNumber(capacity)} ]</h5>
              </React.Fragment>
            )}
            {!featureFlags.showUtilization && (
              <h1 className="title">{formatNumber(capacity)}</h1>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ResourcesLevel;
