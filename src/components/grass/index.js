import { connect } from 'react-redux';
import Grass from './grass';
import { setDragMode } from '../../actions/drag';

const mapStateToProps = ({ wall, rain }) => ({
  grass: wall.grass,
  blockSize: wall.blockSize,
  rainMode: rain.rainMode
});

export default connect(mapStateToProps, { setDragMode })(Grass);
