import { connect } from "react-redux";
import move from "../../actions/moveButtonAction";
import Button from "./Button";

const mapStateToProps = store => ({
    shape: store.shape,
});

const mapDispatchToProps = dispatch => ({
    move: (x, y) => dispatch(move(x, y)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Button);
