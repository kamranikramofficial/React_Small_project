import React from 'react';
import styles from './Filters.module.css';

function Filters({ setFilter }) {
  return (
    <div className={styles.filters}>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="daily">Today</option>
        <option value="weekly">This Week</option>
        <option value="monthly">This Month</option>
      </select>
    </div>
  );
}

export default Filters;
