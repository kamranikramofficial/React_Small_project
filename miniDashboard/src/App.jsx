import React, { useState } from 'react';
import styles from './App.module.css';
import StatCard from './components/StatCard';
import Filters from './components/Filters';
import Header from './components/Header';
import Footer from './components/Footer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const statsData = {
  daily: [
    { title: 'Users', value: 120 },
    { title: 'Revenue', value: '$430' },
    { title: 'Signups', value: 32 },
  ],
  weekly: [
    { title: 'Users', value: 950 },
    { title: 'Revenue', value: '$3,450' },
    { title: 'Signups', value: 240 },
  ],
  monthly: [
    { title: 'Users', value: 4120 },
    { title: 'Revenue', value: '$15,980' },
    { title: 'Signups', value: 1200 },
  ],
};

function App() {
  const [filter, setFilter] = useState('daily');
  const [darkMode, setDarkMode] = useState(false);
  const filteredStats = statsData[filter];

  return (
    <div className={ styles.light}>
      <Header/>
      <Filters setFilter={setFilter} />
      <div className={styles.cardContainer}>
        {filteredStats.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} />
        ))}
      </div>
      <div className={styles.chartContainer}>
        <BarChart width={500} height={300} data={filteredStats}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;




