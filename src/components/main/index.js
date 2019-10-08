import { connect } from 'react-redux';
import Main from './main';
import { unsetDragMode } from '../../actions/drag';
import { addGrassBlocks } from '../../actions/grass';

const mapStateToProps = (state) => ({
  dragMode: state.wall.dragMode,
  startCoordinates: state.wall.startCoordinates,
  block: state.wall.block,
  grass: state.wall.grass,
  direction: state.wall.direction,
  columnIndex: state.wall.columnIndex
});


export default connect(mapStateToProps, { unsetDragMode, addGrassBlocks })(Main);
