import React from "react"
import PropTypes from "prop-types"

const BookMark = ({ status, onToggleBookMark, id }) => {
    return (
        <i
            onClick={() => onToggleBookMark(id)}
            className={`bi bi-bookmark${status ? "-fill" : ""}`}
        ></i>
    )
}

BookMark.propTypes = {
    status: PropTypes.bool.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}

export default BookMark
