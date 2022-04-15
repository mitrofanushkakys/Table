import React, { useState } from "react"
import SearchStatus from "./app/component/searchStatus"
import Users from "./app/component/users"
import api from "./api"

function App() {
    const [users, setUsers] = useState(api.users.fetchAll())
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (id === user._id) {
                    user.bookmark = !user.bookmark
                }

                return user
            })
        )
    }
    return (
        <div>
            <SearchStatus length={users.length} />
            <Users
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
                users={users}
            />
        </div>
    )
}

export default App
