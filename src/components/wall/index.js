import { connect } from 'react-redux';
import Wall from './wall';
import { setDragMode } from '../../actions/drag';

const mapStateToProps = ({ wall, drag, rain }) => ({
  wall: wall.wall,
  blockSize: wall.blockSize,
  water: wall.water,
  nextLevel: wall.nextLevel,
  columnIndex: drag.columnIndex,
  rainMode: rain.rainMode
});

export default connect(mapStateToProps, { setDragMode })(Wall);
