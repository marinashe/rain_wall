import { connect } from 'react-redux';
import Cloud from './cloud';
import { startRain, stopRain, addNextLevel } from '../../actions/rain';

const mapStateToProps = ({ wall, rain }) => ({
  water: wall.water,
  nextLevel: wall.nextLevel,
  wall: wall.wall,
  rainMode: rain.rainMode
});

export default connect(mapStateToProps,
  { startRain, stopRain, addNextLevel }
)(Cloud);
