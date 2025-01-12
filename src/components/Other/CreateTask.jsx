import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function CreateTask() {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const [userData, setUserData] = useContext(AuthContext)

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(taskTitle, taskDesciption, taskDate, assignTo, category);
        const newTask = {
            taskTitle,
            taskDescription, 
            taskDate, 
            category, 
            active: false, 
            newTask: true,
            completed: false, 
            failed: false
        }
        // console.log(newTask);

       
        // console.log(data);
        const updatedData = userData.map((elem) => {
            if (assignTo == elem.firstName) {
                return {
                    ...elem,
                    tasks: [...elem.tasks, newTask],
                    taskCounts: {
                        ...elem.taskCounts,
                        newTask: elem.taskCounts.newTask + 1
                    }
                }
            }  
            return elem
        })
        setUserData(updatedData)

        setTaskTitle('')    
        setTaskDescription('')
        setTaskDate('')
        setAssignTo('')
        setCategory('')
    }
    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={(e) => submitHandler(e)} className='flex justify-between w-full flex-wrap'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input 
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        type="text" placeholder='Make a UI Design'
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input 
                        value={taskDate}
                        onChange={(e) => setTaskDate(e.target.value)}
                        type='date' placeholder='Make a UI Design'
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input 
                        value={assignTo}
                        onChange={(e) => setAssignTo(e.target.value)}
                        type='text' placeholder='employee name'
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        type='text' placeholder='design, dev, etc'
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea 
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    className='w-full h-44 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 py-2 px-4'
                    name="" id=""></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
