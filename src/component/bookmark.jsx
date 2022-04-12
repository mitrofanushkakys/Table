import React from "react";

const BookMark = ({ status, onToggleBookMark, id }) => {
  return (
      <i
          onClick={() => onToggleBookMark(id)}
          className={`bi bi-bookmark${status ? "-fill" : ""}`}
      ></i>
  )
}

export default BookMark
