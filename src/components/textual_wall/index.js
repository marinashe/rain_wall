import { connect } from 'react-redux';
import TextualWall from './textual_wall';
import { createWall, calculateVolumeWater } from '../../actions/wall';
import { setNoAnimationMode } from '../../actions/rain';

const mapStateToProps = ({ wall, rain }) => ({
  wall: wall.wall,
  rainMode: rain.rainMode,
  noAnimationMode: rain.noAnimationMode,
  volumeWater: wall.volumeWater
});

export default connect(mapStateToProps,
  { createWall, setNoAnimationMode, calculateVolumeWater }
)(TextualWall);
