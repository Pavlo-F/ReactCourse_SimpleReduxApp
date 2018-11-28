import React from "react";
import PropTypes from "prop-types";

const DBView = ({ row }) => (
    <div>
        {JSON.stringify(row)}
    </div>
);

export default DBView;


DBView.propTypes = {
    data: PropTypes.object,
};

DBView.defaultProps = {
    data: {},
};
