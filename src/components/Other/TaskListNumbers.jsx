import React from 'react'

function TaskListNumbers() {
    // console.log('data',data);
    const loggedIn = JSON.parse(localStorage.getItem('loggedInUser'))
    const loggedInData = loggedIn.data
    // console.log(loggedInData);
    
    return (
        <div className='flex screen mt-10 gap-5 justify-between'>
            <div className='bg-blue-400 w-[45%] rounded-xl py-6 px-9'>
                <h2 className='text-3xl font-bold'>{loggedInData.taskCounts.newTask}</h2>
                <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
            </div>
            <div className='bg-green-400 w-[45%] rounded-xl py-6 px-9'>
                <h2 className='text-3xl font-bold'>{loggedInData.taskCounts.completed}</h2>
                <h3 className='text-xl mt-0.5 font-medium'>Completed Task</h3>
            </div>
            <div className='bg-yellow-400 w-[45%] rounded-xl py-6 px-9'>
                <h2 className='text-3xl font-bold'>{loggedInData.taskCounts.active}</h2>
                <h3 className='text-xl mt-0.5 font-medium'>Accepted Task</h3>
            </div>
            <div className='bg-red-400 w-[45%] rounded-xl py-6 px-9'>
                <h2 className='text-3xl font-bold'>{loggedInData.taskCounts.failed}</h2>
                <h3 className='text-xl mt-0.5 font-medium'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers
