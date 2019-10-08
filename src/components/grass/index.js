import { connect } from 'react-redux';
import Garss from './grass';
import { setDragMode } from '../../actions/drag';

const mapStateToProps = (state) => ({
  grass: state.wall.grass,
  block: state.wall.block
});


export default connect(mapStateToProps, { setDragMode })(Garss);
