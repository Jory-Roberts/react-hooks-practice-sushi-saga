import React from 'react';
import SushiContainer from './SushiContainer';
import Table from './Table';
import { useState, useEffect } from 'react';

const API = 'http://localhost:3001/sushis';

function App() {
  const [sushis, setSushis] = useState([]);

  useEffect(() => {
    const fetchSushis = async () => {
      try {
        const response = await fetch(API);
        if (!response.ok) {
          throw new Error('request failed');
        }
        const sushiData = await response.json();
        console.log(sushiData);
        setSushis(sushiData);
      } catch (error) {
        console.error('Error fetching data', error);
        throw error;
      }
    };
    fetchSushis();
  }, []);

  return (
    <div className='app'>
      <SushiContainer sushis={sushis} />
      <Table sushis={sushis} />
    </div>
  );
}

export default App;
