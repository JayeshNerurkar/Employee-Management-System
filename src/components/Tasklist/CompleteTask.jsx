import React from 'react'

function CompleteTask({data}) {
    return (
        <div className='h-full w-[300px] flex-shrink-0  bg-blue-500 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm text-black font-semibold'>{data.taskDate}</h4>
            </div>
           <h2 className='mt-5 text-2xl text-black font-semibold'>{data.taskTitle}</h2>
           <p className='mt-2 text-sm text-black'>{data.taskDescription}</p>
           <div className='mt-20'>
                <button className=' bg-green-600 rounded font-semibold py-1 px-2 text-bold w-full'>Completed</button>
           </div>
        </div>
    )
}

export default CompleteTask
