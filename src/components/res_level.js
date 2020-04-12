import React, {useState, useEffect} from 'react';
import {formatNumber} from '../utils/common-functions';

function ResourcesLevel(props) {
  const [data, setData] = useState(props.data);
  const [resourcesMeta, setResourcesMeta] = useState(props.resources);
  const [total, setTotal] = useState({});

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  useEffect(() => {
    const parseData = () => {
      setTotal(data.total)
    };
    if (data.last_updated_time) {
      parseData();
    }
  }, [data]);

  return (
    <div className="Level">
      {resourcesMeta.map((resource, index) => {
        const className = 'level-item fadeInUp ' + resource.className;
        return (
          <div
            key={resource.name}
            className={className}
            style={{animationDelay: '1s'}}
          >
            <h5 className='heading'>{resource.title}</h5>
            <h1 className="title">{formatNumber(total[resource.name])} </h1>
          </div>
        );
      })}
    </div>
  )
}

export default ResourcesLevel;
