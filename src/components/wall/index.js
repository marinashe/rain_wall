import { connect } from 'react-redux';
import Wall from './wall';
import { setDragMode } from '../../actions/drag';

const mapStateToProps = ({ wall, drag }) => ({
  wall: wall.wall,
  blockSize: wall.blockSize,
  water: wall.water,
  nextLevel: wall.nextLevel,
  columnIndex: drag.columnIndex
});

export default connect(mapStateToProps, { setDragMode })(Wall);
