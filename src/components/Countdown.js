import React from 'react';
import { getTimer } from '../utils/date';
import { addDays } from 'date-fns';

export class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
    date: addDays(Date.now(), 20),
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({
      ...getTimer(this.state.date),
    }), 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (<div>
      <h1>Countdown</h1>
      <div className="countdown-wrapper">
        <div className="countdown-item">
          {days}<span>days</span>
        </div>
        <div className="countdown-item">
          {hours}<span>hours</span>
        </div>
        <div className="countdown-item">
          {minutes}<span>minutes</span>
        </div>
        <div className="countdown-item">
          {seconds}<span>seconds</span>
        </div>
      </div>
    </div>)
  }
}
