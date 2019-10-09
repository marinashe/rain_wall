
import React, { PureComponent } from 'react';
import T from 'prop-types';
import Constants from '../../config/constants';
import './styles.css';

const INSTRUCTIONS = `Drag the grass and bricks to build the wall.Click the cloud to start/stop the rain.`;

class TextualWall extends PureComponent {
  static propTypes = {
    wall: T.arrayOf(T.number).isRequired,
    rainMode: T.bool.isRequired,
    createWall: T.func.isRequired,
    noAnimationMode: T.bool.isRequired,
    setNoAnimationMode: T.func.isRequired,
    calculateVolumeWater: T.func.isRequired,
    volumeWater: T.number.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      inputValue: props.wall.join(','),
      error: null,
      wasChanges: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { calculateVolumeWater, wall, rainMode } = this.props;
    if (prevProps.wall !== wall) {
      this.setNewInputValue(wall.join(','));
      this.setNoChanges();
    }

    if (!prevProps.rainMode && rainMode) {
      this.setVolumeWater(calculateVolumeWater(wall));
    }
  }

  setNoChanges =() => {
    this.setState({ wasChanges: false });
  }

  setVolumeWater = (volumeWater) => {
    this.setState({ volumeWater })
  }

  handleChange = (e) => {
    this.setNewInputValue(e.target.value);
    this.setState({ wasChanges: true });
  }

  parseInput = () => {
    const { inputValue } = this.state;
    let error = null;
    const array = inputValue.split(",").map(
      (value) => {
        if (value.trim() !== '' && !isNaN(Number(value))) {
          value = Number(value);
          if (!Number.isInteger(value)) {
            error = 'Wall format is incorrect. All numbers should be integers.';
            return null;
          }
          return value;
        }
        error = 'Wall format is incorrect (should be [1,4,6]).'
        return null;
      }
    );
    return { array, error };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { createWall ,setNoAnimationMode }  = this.props;
    const { array, error } = this.parseInput();
    if (error) {
      this.setState({ error });
      return;
    }

    if (array.length > Constants.MAX_WALL_LENGTH) {
      // this.setState({ error: `Wall is too long. Max wall length = ${ Constants.MAX_WALL_LENGTH }` });
      setNoAnimationMode(array)
      return;
    }

    if (Math.max(...array) > Constants.MAX_WALL_HEIGHT) {
      // this.setState({ error: `Wall is too high. Max wall height = ${ Constants.MAX_WALL_HEIGHT }` });
      setNoAnimationMode(array)
      return;
    }

    createWall(array);
    this.setNoChanges();
  }

  setNewInputValue = (inputValue) => {
    this.setState({inputValue, error: null });
  }


  render() {
    const { inputValue, error, wasChanges } = this.state;
    const { rainMode, noAnimationMode, volumeWater } = this.props;
    const isButtonDisabled = noAnimationMode || rainMode || !wasChanges;
    const buttonClassName = isButtonDisabled ? 'textual-wall-disabled-button' : 'textual-wall-button';
    return (
      <div
        className="textual-wall-container"
      >
        <div className="textual-wall-instruction">{ INSTRUCTIONS }</div>
        <div className="textual-wall-label">
          Water volume: { volumeWater  }
        </div>
        <form className="textual-wall-form" onSubmit={ this.handleSubmit }>
          <label className="textual-wall-label">
            Textual Wall:
            <input
              type="text"
              name="Textual Wall"
              className="textual-wall-input"
              value={ inputValue }
              onChange={ this.handleChange }
              readOnly={ rainMode || noAnimationMode }
            />
          </label>
          <input type="submit" value="Build Wall" className={ buttonClassName } disabled={ isButtonDisabled } />
        </form>
        <div className="textual-wall-error">
          { error || '' }
        </div>
      </div>
    );
  }
}

export default TextualWall;
