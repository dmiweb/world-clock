import { useState} from 'react';
import './App.css';
import FormAddClock from './FormAddClock/FormAddClock';
import ClockBoard from './ClockBoard/ClockBoard';

type Settings = {
  id: string,
  city: string,
  timeZoneOffset: number
}

function App() {
  const [clockSettings, setClockSettings] = useState<Settings[] | []>([]);

  const handleAdd = (settings: {city: string, timeZoneOffset: number}): void => {
    const newClock = {
      id: String(Date.now()),
      city: settings.city,
      timeZoneOffset: settings.timeZoneOffset
    };

    setClockSettings(prevState => [...prevState, newClock])
  }

  const handleRemove = (idClock: string): void => {
    setClockSettings(prevClocks => prevClocks.filter(o => o.id !== idClock));
  }

  return (
    <div className='world-clock'>
      <FormAddClock onAdd={handleAdd} />
      <ClockBoard settings={clockSettings} onRemove={handleRemove} />
    </div>
  )
}

export default App;
