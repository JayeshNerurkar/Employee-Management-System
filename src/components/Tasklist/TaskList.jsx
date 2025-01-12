import React, { useEffect, useState } from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

function TaskList({ loggedInUserData, setloggedInUserData }) {
  // Initialize state with the provided `loggedInUserData`
  const [loggedInData, setLoggedInData] = useState(loggedInUserData || { tasks: [] });

  useEffect(() => {
    // Update `loggedInData` whenever `loggedInUserData` changes
    if (loggedInUserData) {
      setLoggedInData(loggedInUserData);
    }
  }, [loggedInUserData]);

  return (
    <div
      id="tasklist"
      className="h-[55%] mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-auto py-5"
    >
      {/* Safely check if `tasks` is available */}
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
          return null; // Add a fallback return in case no condition is met
        })
      ) : (
        <p className="text-white">No tasks available.</p> // Render fallback UI if no tasks exist
      )}
    </div>
  );
}

export default TaskList;
