import React from "react"
import BookMark from "./bookmark"
import Qualitie from "./qualitie"
import PropTypes from "prop-types"

const User = (props) => {
    const { user } = props

    return (
        <tr>
            <td>{user.name}</td>
            <td>
                {user.qualities.map((q) => (
                    <Qualitie key={q._id} name={q.name} color={q.color} />
                ))}
            </td>

            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>
                <BookMark
                    status={user.bookmark}
                    onToggleBookMark={props.onToggleBookMark}
                    id={user._id}
                />
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => props.onDelete(user._id)}
                >
                    delete
                </button>
            </td>
        </tr>
    )
}

User.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        qualities: PropTypes.array.isRequired,
        profession: PropTypes.object.isRequired,
        completedMeetings: PropTypes.number.isRequired,
        rate: PropTypes.number.isRequired,
        bookmark: PropTypes.bool.isRequired,
        _id: PropTypes.string.isRequired
    }),
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default User
