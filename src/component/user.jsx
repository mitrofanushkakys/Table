import React from "react";
import BookMark from './bookmark'
import Qualitie from "./qualitie";


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


export default User