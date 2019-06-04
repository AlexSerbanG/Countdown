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
    total: {},
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({
      ...getTimer(this.props.date),
    }), 1000);
    if (!Object.keys(this.state.total).length) {
      this.setState({
        total: {
          ...getTimer(this.props.date),
        }
      });
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    if (days + hours + minutes + seconds === 0) {
      return "COMPLETE";
    }
    if (!(days || hours || minutes || seconds)) {
      return "INITIALIZING";
    }

    const { total } = this.state;
    const dayRadius = 360 - mapDateToRadius(days, total.days + 1, 0, 0, 360);
    const hoursRadius = 360 - mapDateToRadius(hours, total.days > 0 ? 24 : total.hours + 1, 0, 0, 360);
    const minutesRadius = 360 - mapDateToRadius(minutes, total.days > 0 && total.hours > 0 ? 60 : total.minutes + 1, 0, 0, 360);
    const secondsRadius = 360 - mapDateToRadius(seconds, total.days > 0 && total.hours > 0 && total.minutes > 0 ? 60 : total.seconds + 1, 0, 0, 360);
    return (<div>
      <h1>Countdown</h1>
      <div className="countdown-wrapper">
        <div className="countdown-item">
          <SvgCircle radius={dayRadius} className="countdown-svg" />
          {days}<span>days</span>
        </div>
        <div className="countdown-item">
          <SvgCircle radius={hoursRadius} className="countdown-svg" />
          {hours}<span>hours</span>
        </div>
        <div className="countdown-item" >
          <SvgCircle radius={minutesRadius} className="countdown-svg" />
          {minutes}<span>minutes</span>
        </div>
        <div className="countdown-item">
          <SvgCircle radius={secondsRadius} className="countdown-svg" />
          {seconds}<span>seconds</span>
        </div>
      </div>
    </div>)
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
