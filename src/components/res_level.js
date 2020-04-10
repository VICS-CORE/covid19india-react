import React, {useState, useEffect} from 'react';

function ResourcesLevel(props) {
  const [data, setData] = useState(props.data);
  const [beds, setBeds] = useState(0);
  const [icu_beds, setICUBeds] = useState(0);
  const [ventilators, setVentilators] = useState(0);
  const [doctors, setDoctors] = useState(0);
  const [nurses, setNurses] = useState(0);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  useEffect(() => {
    const parseData = () => {
      setBeds(data.total.beds);
      setICUBeds(data.total.icu_beds);
      setVentilators(data.total.ventilators);
      setDoctors(data.total.doctors);
      setNurses(data.total.nurses);
    };
    if (data.last_updated_time) {
      parseData();
    }
  }, [data]);

  return (
    <div className="Level">
      <div
        className="level-item is-cherry fadeInUp"
        style={{animationDelay: '1s'}}
      >
        <h5>Beds</h5>
        <h1>{beds} </h1>
      </div>

      <div
        className="level-item is-blue fadeInUp"
        style={{animationDelay: '1.1s'}}
      >
        <h5 className="heading">ICU Beds</h5>
        <h1 className="title has-text-info">{icu_beds}</h1>
      </div>

      <div
        className="level-item is-blue fadeInUp"
        style={{animationDelay: '1.2s'}}
      >
        <h5 className="heading">Ventilators</h5>
        <h1 className="title has-text-success">{ventilators} </h1>
      </div>

      <div
        className="level-item is-green fadeInUp"
        style={{animationDelay: '1.3s'}}
      >
        <h5 className="heading">Doctors</h5>
        <h1 className="title has-text-grey">{doctors}</h1>
      </div>

      <div
        className="level-item is-green fadeInUp"
        style={{animationDelay: '1.4s'}}
      >
        <h5 className="heading">Nurses</h5>
        <h1 className="title has-text-grey">{nurses}</h1>
      </div>
    </div>
  );
}

export default ResourcesLevel;
