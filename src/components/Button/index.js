import { connect } from "react-redux";
import move from "../../actions/moveButtonAction";
import { getDBData, setDBData } from "../../actions/dataBaseAction";
import Button from "./Button";

const mapStateToProps = store => ({
    dataBase: store.dataBase,
});

const mapDispatchToProps = dispatch => ({
    move: (points, algoritm) => dispatch(move(points, algoritm)),
    getDBData: name => dispatch(getDBData(name)),
    setDBData: (name, rawData) => dispatch(setDBData(name, rawData)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Button);
