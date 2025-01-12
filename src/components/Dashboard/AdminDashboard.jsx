import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

function AdminDashboard({setUser}) {
    return (
        <div className='p-7 h-screen w-full'>
            <Header setUser={setUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard
