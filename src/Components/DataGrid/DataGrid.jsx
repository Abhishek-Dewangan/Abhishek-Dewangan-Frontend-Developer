import axios from 'axios';
import React, {useEffect, useState} from 'react';
import styles from './DataGrid.module.css';

export const DataGrid = ({status, launchDate, type}) => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const filter = (array) => {
    if (status) {
      array = array.filter((elem) => elem.status === status);
    }

    if (type) {
      array = array.filter((elem) => elem.type === type);
    }

    if (launchDate) {
      if (launchDate === 'htl') {
        array.sort((a, b) => b.original_launch_unix - a.original_launch_unix);
      } else {
        array.sort((a, b) => a.original_launch_unix - b.original_launch_unix);
      }
    }
    setFilterData(array);
  };

  const getData = async () => {
    try {
      const res = await axios.get('https://api.spacexdata.com/v3/capsules');
      setData(res.data);
      setFilterData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let result = [...data];
    filter(result);
  }, [status, type, launchDate]);

  return (
    <div>
      <div className={styles.gridData}>
        {filterData.length ? (
          filterData.map((elem, index) => {
            return (
              <div key={index} className={styles.gridBox}>
                <h3>
                  {elem.type} ({elem.capsule_serial})
                </h3>
                <p>
                  Launch Date - {''}
                  {elem.original_launch
                    ? elem.original_launch.slice(0, 10)
                    : 'Not Updated'}
                </p>
                <p>Status - {elem.status}</p>
              </div>
            );
          })
        ) : (
          <div className={styles.notFound}>
            <h2>Filtered data not found</h2>
          </div>
        )}
      </div>
    </div>
  );
};
