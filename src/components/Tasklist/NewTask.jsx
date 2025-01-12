import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function NewTask({ task, employee, setloggedInUserData }) {
  const [userData, setUserData] = useContext(AuthContext);

  const handleTask = (employee, task) => {
    // Update `userData` in the AuthContext
    const updatedData = userData.map((elem) => {
      if (elem.firstName === employee.firstName) {
        const updatedTasks = elem.tasks.map((t) => {
          if (t.taskTitle === task.taskTitle && t.taskDate === task.taskDate) {
            return {
              ...t,
              active: true,
              newTask: false,
            };
          }
          return t;
        });

        return {
          ...elem,
          tasks: updatedTasks,
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask - 1,
            active: elem.taskCounts.active + 1,
          },
        };
      }
      return elem;
    });

    // Update the `AuthContext`
    setUserData(updatedData);

    // Sync `loggedInUserData` and localStorage for the current employee
    const employeeData = updatedData.find(
      (elem) => elem.firstName === employee.firstName
    );

    const updatedLoggedInUser = {
      role: 'employee',
      data: employeeData,
    };

    setloggedInUserData(employeeData);
    localStorage.setItem('loggedInUser', JSON.stringify(updatedLoggedInUser));
    localStorage.setItem('employees', JSON.stringify(updatedData));
  };

  return (
    <div className="h-full w-[300px] flex-shrink-0 bg-red-500 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{task.category}</h3>
        <h4 className="text-sm text-black font-semibold">{task.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl text-black font-semibold">{task.taskTitle}</h2>
      <p className="mt-2 text-sm text-black">{task.taskDescription}</p>
      <div className="mt-20">
        <button
          onClick={() => handleTask(employee, task)}
          className="bg-blue-500 rounded font-semibold py-1 px-2 text-bold w-full"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
}

export default NewTask;
 