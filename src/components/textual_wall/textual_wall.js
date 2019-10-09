
import React, { PureComponent } from 'react';
import T from 'prop-types';
import Constants from '../../config/constants';
import './styles.css';

class TextualWall extends PureComponent {
  static propTypes = {
    wall: T.arrayOf(T.number).isRequired,
    rainMode: T.bool.isRequired,
    createWall: T.func.isRequired,
    noAnimationMode: T.bool.isRequired,
    setNoAnimationMode: T.func.isRequired,
    calculateVolumeWater: T.func.isRequired,
    volumeWater: T.number.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      inputValue: props.wall.join(','),
      error: null
    }
  }

  componentDidUpdate(prevProps) {
    const { calculateVolumeWater, wall, rainMode } = this.props;
    if (prevProps.wall !== wall) {
      this.setNewInputValue(wall.join(','));
    }

    if (!prevProps.rainMode && rainMode) {
      this.setVolumeWater(calculateVolumeWater(wall));
    }
  }

  setVolumeWater = (volumeWater) => {
    this.setState({ volumeWater })
  }

  handleChange = (e) => {
    this.setNewInputValue(e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputValue } = this.state;
    const { createWall ,setNoAnimationMode }  = this.props;
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
    if (error) {
      this.setState({ error });
      return;
    }

    if (array.length > Constants.MAX_WALL_LENGTH) {
      // this.setState({ error: `Wall is too long. Max wall length = ${ Constants.MAX_WALL_LENGTH }` });
      setNoAnimationMode()
      return;
    }

    if (Math.max(...array) > Constants.MAX_WALL_HEIGHT) {
      // this.setState({ error: `Wall is too high. Max wall height = ${ Constants.MAX_WALL_HEIGHT }` });
      setNoAnimationMode()
      return;
    }

    createWall(array);
  }

  setNewInputValue = (inputValue) => {
    this.setState({inputValue, error: null });
  }


  render() {
    const { inputValue, error } = this.state;
    const { rainMode, noAnimationMode, volumeWater } = this.props;
    const isButtonDisabled = noAnimationMode || rainMode;
    const buttonClassName = isButtonDisabled ? 'disabled-button' : 'button';
    return (
      <div
        className="textual-wall-container"
      >
        <div className="label">
          Volume water: { volumeWater  }
        </div>
        <form className="form" onSubmit={ this.handleSubmit }>
          <label className="label">
            Textual Wall:
            <input
              type="text"
              name="Textual Wall"
              className="input"
              value={ inputValue }
              onChange={ this.handleChange }
            />
          </label>
          <input type="submit" value="Build Wall" className={ buttonClassName } disabled={ isButtonDisabled } />
        </form>
        <div className="error">
          { error || '' }
        </div>
      </div>
    );
  }
}

export default TextualWall;
