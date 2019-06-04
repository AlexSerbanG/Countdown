// Packages
import React from 'react';
// Components
import { SvgCircle } from '../SvgCircle/SvgCircle';
// Utils
import { getTimer } from '../../utils/date';
import { mapDateToRadius } from '../../utils/number';
// Styles
import './Countdown.css';

export class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({
      ...getTimer(this.props.date),
    }), 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    if (!(days || hours || minutes || seconds)) {
      return null;
    }
    const dayRadius = 360 - mapDateToRadius(days, 30, 0, 0, 360);
    const hoursRadius = 360 - mapDateToRadius(hours, 24, 0, 0, 360);
    const minutesRadius = 360 - mapDateToRadius(minutes, 60, 0, 0, 360);
    const secondsRadius = 360 - mapDateToRadius(seconds, 60, 0, 0, 360);
    return (<div>
      <h1>Countdown</h1>
      <div className="countdown-wrapper">
        <div className="countdown-item">
          <SvgCircle radius={dayRadius} className="countdown-svg"/>
          {days}<span>days</span>
        </div>
        <div className="countdown-item">
        <SvgCircle radius={hoursRadius} className="countdown-svg"/>
          {hours}<span>hours</span>
        </div>
        <div className="countdown-item" >
          <SvgCircle radius={minutesRadius} className="countdown-svg"/>
          {minutes}<span>minutes</span>
        </div>
        <div className="countdown-item">
          <SvgCircle radius={secondsRadius} className="countdown-svg"/>
          {seconds}<span>seconds</span>
        </div>
      </div>
    </div>)
  }
}
