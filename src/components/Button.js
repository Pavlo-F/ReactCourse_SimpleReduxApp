import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import move from "../actions/moveButtonAction";

class Button extends React.PureComponent {
    onMoveBtnClick = () => {
        const { x, y } = this.props.shape;
        this.props.move(x + 1, y + 1);
    }

    render() {
        const { x, y } = this.props.shape;

        return (
            <div>
                <button onClick={this.onMoveBtnClick} >
                    Шаг
                </button>
                <div>
                    current point: {x}, {y}
                </div>
            </div>
        );
    }
}


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

Button.propTypes = {
    move: PropTypes.func.isRequired,
};
