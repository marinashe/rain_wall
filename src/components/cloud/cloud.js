import React, { PureComponent } from 'react';
import T from 'prop-types';

import './styles.css';

class Cloud extends PureComponent {
  static propTypes = {
    wall: T.arrayOf(T.number).isRequired,
    water: T.arrayOf(T.number).isRequired,
    nextLevel: T.arrayOf(T.number).isRequired,
    startRain: T.func.isRequired,
    stopRain: T.func.isRequired,
    rainMode: T.bool.isRequired
  }


  toggleRain = () => {
    const { startRain, stopRain, rainMode } = this.props;
    if (rainMode) {
      stopRain();
    } else {
      startRain();
    }
  }

  render() {

    return (
      <div
        className="cloud"
        onClick={ this.toggleRain }
      />
    );
  }
}

export default Cloud;
