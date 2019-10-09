import { connect } from 'react-redux';
import App from './app';
import { unsetDragMode } from '../../actions/drag';
import { addGrassBlocks } from '../../actions/grass';
import { addWallBlocks } from '../../actions/wall';

const mapStateToProps = ({ wall, drag }) => ({
  dragMode: drag.dragMode,
  startCoordinates: drag.startCoordinates,
  blockSize: wall.blockSize,
  grass: wall.grass,
  direction: drag.direction,
  columnIndex: drag.columnIndex,
  wall: wall.wall
});


export default connect(mapStateToProps, { unsetDragMode, addGrassBlocks, addWallBlocks })(App);
