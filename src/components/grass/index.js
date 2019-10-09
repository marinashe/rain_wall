import { connect } from 'react-redux';
import Grass from './grass';
import { setDragMode } from '../../actions/drag';

const mapStateToProps = ({ wall }) => ({
  grass: wall.grass,
  blockSize: wall.blockSize
});

export default connect(mapStateToProps, { setDragMode })(Grass);
