import React from "react";
import PropTypes from "prop-types";
import Square from "../Square";

export default class ShapeContainer extends React.PureComponent {
    render() {
        const { raw } = this.props;

        console.log(this.props);

        if (raw.points) {
            return (
                <div>
                    {
                        raw.points.map(point => <Square {...point} key={`point_${point.id}`}
                        />)
                    }
                </div>
            );
        }

        return null;
    }
}


ShapeContainer.propTypes = {
    props: PropTypes.object,
};

ShapeContainer.defaultProps = {
    points: [],
};
