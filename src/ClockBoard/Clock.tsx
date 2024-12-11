import { useState, useEffect} from 'react';

type ClockProps = {
  settings: {
    id: string,
    city: string,
    timeZoneOffset: number,
  },
  onRemove: (idClock: string) => void
}

const Clock = ({ settings, onRemove }: ClockProps): JSX.Element => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const { id, city, timeZoneOffset } = settings;

  const newTime = {
    hours: (new Date().getHours() + Number(timeZoneOffset)) * 30,
    minutes: new Date().getMinutes() * 6,
    seconds: new Date().getSeconds() * 6
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(newTime);
    }, 0);

    return () => {clearTimeout(timeout)}

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  return (
    <div id={id} className='clock'>
      <div className="city">{city}</div>
      <div className='clock-face'>
        <div className='hour-hand' style={{ transform: `rotate(${time.hours}deg)` }}></div>
        <div className='minute-hand' style={{ transform: `rotate(${time.minutes}deg)` }}></div>
        <div className='second-hand' style={{ transform: `rotate(${time.seconds}deg)` }}></div>
      </div>
      <button type='button' className='clock-remove-btn' onClick={() => onRemove(id)}>x</button>
    </div>
  );
}

export default Clock;