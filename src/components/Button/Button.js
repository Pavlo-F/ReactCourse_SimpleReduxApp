import React from "react";
import PropTypes from "prop-types";
import MOVE from "../../consts/algorithms";

export default class Button extends React.PureComponent {
    onMoveBtnClick = () => {
        const { points } = this.props.dataBase.raw;

        if (points) {
            this.props.behave(points, MOVE);
        }
    }

    onShowDBDataBtnClick = () => this.props.getDBData("test");
    
    onSaveDBDataBtnClick = () => this.props.setDBData("test", this.props.dataBase.raw);
    
    onCreateDBDataBtnClick = () => {
        const data = {
            points: [
                { x: 1, y: 1, id: "ew3ty4rfq" },
                { x: 1, y: 2, id: "kldsfcdf" },
                { x: 2, y: 3, id: "sfbhn56y" },
                { x: 2, y: 4, id: "54uh5rmnj" },
            ],
        };


        this.props.setDBData("test", data);
    }

    render() {
        return (
            <div>
                <button onClick={this.onMoveBtnClick} >
                    Шаг
                </button>
                <button onClick={this.onShowDBDataBtnClick} >
                    Получить данные
                </button>
                <button onClick={this.onSaveDBDataBtnClick} >
                    Сохранить данные
                </button>
                <button onClick={this.onCreateDBDataBtnClick} >
                    Создать данные
                </button>
            </div>
        );
    }
}

Button.propTypes = {
    behave: PropTypes.func.isRequired,
    getDBData: PropTypes.func.isRequired,
    points: PropTypes.object,
};

Button.defaultProps = {
    points: [],
};
