import reactLogo from './assets/react.svg'
import './App.css'
import { getHolidays } from './api/holidays'
import { useEffect, useState } from 'react'
import { Card } from './components/Card';
import { CardParams } from './types';

function App() {
  const [holidays, setHolidays] = useState<CardParams['holiday'][]>([]);
  useEffect(() => {
    const fetchHolidays = async () => {
      const holidays = await getHolidays();
      setHolidays(holidays);
    };
    fetchHolidays();
  }, []);
  
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>
          Holidays
        </p>
        {holidays?.map((holiday) => {
          return (
            <Card key={holiday.fecha} holiday={holiday} />
          )
        }) ?? null}
      </div>
    </>
  )
}

export default App
