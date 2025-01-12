import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AcceptTask({task, loggedInUserData, setloggedInUserData}) {

    const [userData, setUserData] = useContext(AuthContext)

    const CompleteHandler = () => {
        const updatedData = userData.map((elem) => {
            // console.log(elem);
            if (elem.firstName == loggedInUserData.firstName) {
                const updatedTasks = elem.tasks.map((t) => {
                    if (t.taskTitle == task.taskTitle  && t.taskDate == task.taskDate) {
                        return {
                            ...t,
                            active: false,
                            completed: true
                        }
                    }
                    return t
                })

                return {
                    ...elem,
                    tasks: updatedTasks,
                    taskCounts: {
                        ...elem.taskCounts,
                        completed: elem.taskCounts.completed + 1,
                        active: elem.taskCounts.active - 1 
                    }
                }
            }
            return elem
        })
        setUserData(updatedData)

        const employeeData = updatedData.find(
            (elem) => elem.firstName === loggedInUserData.firstName
          );
      
          const updatedLoggedInUser = {
            role: 'employee',
            data: employeeData,
          };
      
          setloggedInUserData(employeeData);
          localStorage.setItem('loggedInUser', JSON.stringify(updatedLoggedInUser));
          localStorage.setItem('employees', JSON.stringify(updatedData));
        

    }

    const failedHandler = () => {
        const updatedData = userData.map((elem) => {
            // console.log(elem);
            if (elem.firstName == loggedInUserData.firstName) {
                const updatedTasks = elem.tasks.map((t) => {
                    if (t.taskTitle == task.taskTitle  && t.taskDate == task.taskDate) {
                        return {
                            ...t,
                            active: false,
                            failed: true
                        }
                    }
                    return t
                })

                return {
                    ...elem,
                    tasks: updatedTasks,
                    taskCounts: {
                        ...elem.taskCounts,
                        failed: elem.taskCounts.failed + 1,
                        active: elem.taskCounts.active - 1 
                    }
                }
            }
            return elem
        })
        setUserData(updatedData)

        const employeeData = updatedData.find(
            (elem) => elem.firstName === loggedInUserData.firstName
          );
      
          const updatedLoggedInUser = {
            role: 'employee',
            data: employeeData,
          };
      
          setloggedInUserData(employeeData);
          localStorage.setItem('loggedInUser', JSON.stringify(updatedLoggedInUser));
          localStorage.setItem('employees', JSON.stringify(updatedData));
        
    }

    
    return (
        <div className='h-full w-[300px] flex-shrink-0  bg-yellow-500 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category}</h3>
                <h4 className='text-sm text-black font-semibold'>{task.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl text-black font-semibold'>{task.taskTitle}</h2>
            <p className='mt-2 text-sm text-black'>{task.taskDescription}</p>
            <div className='flex gap-2 mt-20 '>
                <button 
                onClick={() => CompleteHandler()}
                className='bg-green-500 rounded  py-2 px-2 text-xs font-semibold w-[50%]'>Mark as Completed</button>
                <button 
                onClick={() => failedHandler()}
                className='bg-red-500 rounded font-semibold py-1 px-2 text-xs w-[50%]'>Mark as Failed</button>
            </div>
        </div>  
    )
}
export default AcceptTask
