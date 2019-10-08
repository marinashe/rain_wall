import { connect } from 'react-redux';
import Wall from './wall';

const mapStateToProps = (state) => ({
  wall: state.wall.wall,
  block: state.wall.block,
  water: state.wall.water,
  nextLevel: state.wall.nextLevel
});

export default connect(mapStateToProps, {})(Wall);
