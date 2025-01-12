import React, { useEffect, useState } from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

function TaskList({ loggedInUserData, setloggedInUserData }) {
  const [loggedInData, setLoggedInData] = useState(loggedInUserData || { tasks: [] });

  useEffect(() => {
    
    if (loggedInUserData) {
      setLoggedInData(loggedInUserData);
    }
  }, [loggedInUserData]);

  return (
    <div
      id="tasklist"
      className="h-[55%] mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-auto py-5"
    >
      
      {loggedInData?.tasks?.length > 0 ? (
        loggedInData.tasks.map((elem, id) => {
          if (elem.active) {
            return (
              <AcceptTask
                key={id}
                task={elem}
                loggedInUserData={loggedInUserData}
                setloggedInUserData={setloggedInUserData}
              />
            );
          }
          if (elem.completed) {
            return <CompleteTask key={id} data={elem} />;
          }
          if (elem.newTask) {
            return (
              <NewTask
                key={id}
                task={elem}
                employee={loggedInUserData}
                setloggedInUserData={setloggedInUserData}
              />
            );
          }
          if (elem.failed) {
            return <FailedTask key={id} data={elem} />;
          }
          return null; 
        })
      ) : (
        <p className="text-white">No tasks available.</p> 
      )}
    </div>
  );
}

export default TaskList;
