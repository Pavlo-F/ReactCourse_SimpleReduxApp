import React from "react";
import PropTypes from "prop-types";


export default class Button extends React.PureComponent {
    onMoveBtnClick = () => {
        const { x, y } = this.props.shape;


        // !!! передать массив и функцию которая будет создавать новый массив и ложить в payload
        this.props.move(x + 1, y + 1);
    }

    onShowDBDataBtnClick = () => {
        this.props.getDBData("sss");
    }

    render() {
        const { x, y } = this.props.shape;

        return (
            <div>
                <button onClick={this.onMoveBtnClick} >
                    Шаг
                </button>
                <button onClick={this.onShowDBDataBtnClick} >
                    Данные БД
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
    getDBData: PropTypes.func.isRequired,
    shape: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
};

Button.defaultProps = {
    shape: {
        x: 0,
        y: 0,
    },
};
