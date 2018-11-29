import { connect } from "react-redux";
import ShapeContainer from "./ShapeContainer";

const mapStateToProps = ({ dataBase }) => ({
    raw: dataBase.raw,
    error: dataBase.error,
    isFetching: dataBase.isFetching,
});

export default connect(
    mapStateToProps,
)(ShapeContainer);
