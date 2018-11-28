import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Square extends React.PureComponent {
    render() {
        const { x, y } = this.props.shape;

        return (
            <div style={{
                position: "absolute",
                top: `${y * 50}px`,
                left: `${x * 50}px`,
                zIndex: "10",
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
            }}>
                
            </div>
        );
    }
}

const mapStateToProps = store => ({
    shape: store.shape,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Square);

Square.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
};
