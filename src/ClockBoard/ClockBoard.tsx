// import { useState, useEffect } from 'react';
import Clock from './Clock';
import NoClocks from './NoClocks';

type ClockBoardProps = {
  settings: {
    id: string,
    city: string,
    timeZoneOffset: number
  }[],
  onRemove: (idClock: string) => void
}

const ClockBoard = ({ settings, onRemove }: ClockBoardProps): JSX.Element => {
  const clocks = settings.map(set => <Clock key={set.id} settings={set} onRemove={onRemove} />);

  return (
    <div className="clock-board">
      {!settings.length ? <NoClocks /> : clocks}
    </div>
  );
}

export default ClockBoard;