import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../Tasklist/TaskList'

function EmployeeDashboard({loggedInUserData, setUser, setloggedInUserData}) {
    return (
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header loggedInUserData={loggedInUserData} setUser={setUser} />
            <TaskListNumbers loggedInUserData={loggedInUserData}/>
            <TaskList loggedInUserData={loggedInUserData} setloggedInUserData={setloggedInUserData} />
        </div>
    )
}

export default EmployeeDashboard
