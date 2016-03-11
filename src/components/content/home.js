import React from 'react';

// components

import Nav from './nav';
import Seo from './seo';
import Header from './header';
import Footer from './footer';

// utils

import apiUtils from '../../utils/api-utils';
import dateUtils from '../../utils/date-utils';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      result: false,
      number: null,
      time: null,
      type: null,
    };
  }

  componentDidMount() {
    this.init();
  }

  init() {
    const now = dateUtils.getToday().substr(0, 10);
    const gameStatus = apiUtils.getDate(now);

    console.log('now:', now);

    gameStatus.then(date => {
      const status = date.data;

      console.log('status:', status);

      // empty status falls through
      if (status.length === 1) {
        this.setState({
          result: true,
          time: status[0].eventTime,
          type: status[0].eventType,
        });
      } else if (status.length > 1) {
        const eventTimes = status.map(d => d.eventTime);

        console.log('times:', eventTimes);
        this.setState({
          result: true,
          number: status.length,
          times: eventTimes,
          type: status[0].eventType,
        });
      }
    },
    (error) => {
      console.log('error:', error);
    });
  }

  multipleTimes(times) {
    let result = '';
    times.forEach(t => {
      result = (result === '') ? t : `${result} and ${t}`;
    });
    return result;
  }

  render() {
    let status;
    const result = this.state.result;
    const number = this.state.number;
    if (result && !number) {
      switch (this.state.type) {
        case 'game':
          status = <h2 className="c-pos">YES at {this.state.time}.</h2>;
          break;

        default:
          status =
          <h2 className="c-pos">Well, there's a {this.state.type} at {this.state.time}.</h2>;
          break;
      }
    } else if (result && number) {
      const times = this.state.times;
      switch (this.state.type) {
        case 'game':
          status = (
            <h2 className="c-pos">
            YES. There are actually {this.state.number} games today, at {this.multipleTimes(times)}.
            </h2>
          );
          break;

        default:
          status =
          <h2 className="c-pos">There's a {this.state.type} at {this.multipleTimes(times)}.</h2>;
          break;
      }
    } else {
      status = <h2 className="c-neg">NO.</h2>;
    }

    return (
      <div className="row middle-xsmall center-xsmall">
        <div className="column-xsmall">
        <Header />
          {status}

          <Nav link />
          <Seo />
          <Footer />

        </div>
      </div>
    );
  }
}

export default Home;
