import React from "react";
import PropTypes from "prop-types";

const Square = ({ x, y }) => (
    <div style={{
        position: "absolute",
        top: `${y * 50}px`,
        left: `${x * 50}px`,
        zIndex: "10",
        width: "50px",
        height: "50px",
        backgroundColor: "lightblue",
        border: "1px solid",
    }}>

    </div>
);

export default Square;


Square.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
};

Square.defaultProps = {
    x: 0,
    y: 0,
};
