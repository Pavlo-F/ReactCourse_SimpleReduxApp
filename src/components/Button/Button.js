import React from "react";
import PropTypes from "prop-types";


export default class Button extends React.PureComponent {
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

Button.propTypes = {
    move: PropTypes.func.isRequired,
    shape: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
};

Button.defaultProps = {
    shape: { x: 0, y: 0 },
}
