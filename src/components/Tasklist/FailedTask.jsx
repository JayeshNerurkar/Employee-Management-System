import React from 'react'

function FailedTask({data}) {
    return (
        <div className='h-full w-[300px] flex-shrink-0  bg-green-500 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm text-black font-semibold'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl text-black font-semibold'>{data.taskTitle}</h2>
            <p className='mt-2 text-sm text-black'>{data.taskDescription}</p>
            <div className='mt-20'>
                <button className='w-full bg-red-500 rounded font-medium py-1 px-2 text-xs'>Failed</button>
            </div>
        </div>
    )
}

export default FailedTask
