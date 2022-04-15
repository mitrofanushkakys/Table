import React from "react"
import PropTypes from "prop-types"

const Qualitie = (props) => {
    return <span className={`badge bg-${props.color} m-2`}>{props.name}</span>
}

Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Qualitie
