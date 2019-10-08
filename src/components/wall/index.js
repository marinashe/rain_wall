import { connect } from 'react-redux';
import Wall from './wall';
import { setDragMode } from '../../actions/drag';

const mapStateToProps = (state) => ({
  wall: state.wall.wall,
  block: state.wall.block,
  water: state.wall.water,
  nextLevel: state.wall.nextLevel,
  columnIndex: state.wall.columnIndex
});

export default connect(mapStateToProps, { setDragMode })(Wall);
