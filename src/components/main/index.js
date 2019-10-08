import { connect } from 'react-redux';
import Main from './main';
import { unsetDragMode, setCoordinates } from '../../actions/drag';
import { addGrassBlocks } from '../../actions/grass';

const mapStateToProps = (state) => ({
  dragMode: state.wall.dragMode,
  startCoordinates: state.wall.startCoordinates,
  block: state.wall.block,
  grass: state.wall.grass,
  direction: state.wall.direction
});


export default connect(mapStateToProps, { unsetDragMode, setCoordinates, addGrassBlocks })(Main);
