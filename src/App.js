import React, { useEffect, useState } from "react"
import Users from "./app/component/users"
import api from "./api"

function App() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data))
    }, [])

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
            <Users
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
                users={users}
            />
        </div>
    )
}

export default App
