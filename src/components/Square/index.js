import { connect } from "react-redux";
import Square from "./Square";

const mapStateToProps = store => ({
    //x: store.shape.x,
    //y: store.shape.y,
});

export default connect(
    mapStateToProps,
)(Square);
