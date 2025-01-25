// styles
import './App.css'

// api
import { getHolidays } from './api/holidays'

// react
import { useEffect, useState } from 'react'

// components
import { Card } from './components/Card';

// types
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
  )
}

export default App
