import { connect } from "react-redux";
import move from "../../actions/moveButtonAction";
import getDBData from "../../actions/dataBaseAction";
import Button from "./Button";

const mapStateToProps = store => ({
    shape: store.shape,
});

const mapDispatchToProps = dispatch => ({
    move: (x, y) => dispatch(move(x, y)),
    getDBData: name => dispatch(getDBData(name)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Button);
