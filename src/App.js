// Packages
import React from 'react';
import { addDays, addHours, addMinutes, addSeconds } from 'date-fns';
// Components
import { Countdown } from './components/Countdown/Countdown';

function App() {
  return (
    <div className="App">
      <Countdown date={addHours(Date.now(), 15)} />
    </div>
  );
}

export default App;
