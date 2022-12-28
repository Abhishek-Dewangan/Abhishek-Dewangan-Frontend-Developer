import React, {useEffect, useState} from 'react';
import {DataGrid} from '../DataGrid/DataGrid';
// import {DataGrid} from '../DataGrid/DataGrid';
import styles from './SearchForm.module.css';

export const SearchForm = () => {
  const [status, setStatus] = useState(null);
  const [launchDate, setLaunchDate] = useState(null);
  const [type, setType] = useState(null);
  const search = (e) => {
    e.preventDefault();
    setLaunchDate(e.target.launchDate.value);
    setStatus(e.target.status.value);
    setType(e.target.type.value);
  };
  useEffect(() => {
    // console.log(launchDate, status, type);
  }, [status, type, launchDate]);
  return (
    <div>
      <form onSubmit={search} className={styles.form}>
        <select name='status' className={styles.filter}>
          <option value=''>Status</option>
          <option value='active'>Active</option>
          <option value='retired'>Retired</option>
          <option value='unknown'>Unknown</option>
        </select>
        <select name='launchDate' className={styles.filter}>
          <option value=''>Launch Date</option>
          <option value='htl'>Newest First</option>
          <option value='lth'>Oldest First</option>
        </select>
        <select name='type' className={styles.filter}>
          <option value=''>Type</option>
          <option value='Dragon 1.0'>Dragon 1.0</option>
          <option value='Dragon 1.1'>Dragon 1.1</option>
          <option value='Dragon 2.0'>Dragon 2.0</option>
        </select>
        <input type={'submit'} value={'Search'} />
      </form>
      <DataGrid status={status} launchDate={launchDate} type={type} />
    </div>
  );
  // <DataGrid status={status} launchDate={launchDate} type={type} />
};
