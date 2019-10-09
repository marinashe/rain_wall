import { connect } from 'react-redux';
import TextualWall from './textual_wall';
import { createWall } from '../../actions/wall';

const mapStateToProps = ({ wall, rain }) => ({
  wall: wall.wall,
  rainMode: rain.rainMode
});

export default connect(mapStateToProps,
  { createWall }
)(TextualWall);
