// Packages
import React from 'react';
import { addDays } from 'date-fns';
// Components
import { Countdown } from './components/Countdown/Countdown';

function App() {
  return (
    <div className="App">
      <Countdown date={addDays(Date.now(), 20)} />
    </div>
  );
}

export default App;
