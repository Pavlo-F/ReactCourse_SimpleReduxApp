import { connect } from "react-redux";
import DBView from "./DBView";

const mapStateToProps = store => ({
    row: store.shape.row,
});

export default connect(
    mapStateToProps,
)(DBView);
