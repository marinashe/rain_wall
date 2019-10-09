import React, { PureComponent } from 'react';
import T from 'prop-types';
import cloud  from '../../assets/clouds.png';
import './styles.css';

const INTERVAL = 1000;

class Cloud extends PureComponent {
  static propTypes = {
    wall: T.arrayOf(T.number).isRequired,
    water: T.arrayOf(T.number).isRequired,
    nextLevel: T.arrayOf(T.number).isRequired,
    startRain: T.func.isRequired,
    stopRain: T.func.isRequired,
    rainMode: T.bool.isRequired,
    addNextLevel: T.func.isRequired
  }

  componentWillUnmount() {
    if (this.animation) {
      clearInterval(this.animation);
      this.animation = null;
    }
  }

  addLevel = () => {
    const { wall, water, nextLevel, addNextLevel } = this.props;
    const newWater = water.map((waterColumn, index) => waterColumn + nextLevel[index]);

    const newNextLevel = Array(wall.length).fill(0);

    for (let i = 1; i < wall.length - 1; i++) {
      const wallHeight = wall[i] + newWater[i];
      let isFall = false;
      for (let left = i - 1; left >= 0; left--) {
        if (wall[left] + newWater[left] > wallHeight) {
          break;
        }

        if (wall[left] + newWater[left] < wallHeight || left === 0) {
          isFall = true;
          break;
        }
      }
      if (isFall) {
        continue;
      }
      for (let right = i + 1; right < wall.length; right++) {
        if (wall[right] + newWater[right] > wallHeight) {
          break;
        }

        if (wall[right] + newWater[right] < wallHeight || right === wall.length - 1) {
          isFall = true;
          break;
        }
      }
      if (isFall) {
        continue;
      }
      newNextLevel[i] = 1;
    }
    addNextLevel(newWater, newNextLevel);
  }

  toggleRain = () => {
    const { startRain, stopRain, rainMode } = this.props;
    if (rainMode) {
      stopRain();
      clearInterval(this.animation);
      this.animation = null;
    } else {
      startRain();
      this.addLevel();
      this.animation = setInterval(this.addLevel, INTERVAL)
    }
  }

  render() {
    return (
      <div
        className="clouds-container"
        onClick={ this.toggleRain }
      >
        <img  src={ cloud } className="clouds" alt="clouds"/>
      </div>
    );
  }
}

export default Cloud;
