import React, { Component } from 'react';
import CountUp from 'react-countup';
export default class Counters extends Component {
  render() {
    return (
      <div className="counter-area">
        <div className="container">
            <div className="row">
                <div className="col-3">
                <CountUp end={100} />
                </div>
            </div>
        </div>
      </div>
    )
  }
}
