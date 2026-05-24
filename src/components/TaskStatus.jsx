const TaskStatus = ({ tasks, resolved, handleCompleteTask }) => {
  return (
    <div className="space-y-6">

      <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
        <h2 className="font-bold text-lg text-gray-800 mb-5">
          Task Status
        </h2>

        {
          tasks.length === 0 ? (
            <p className="text-sm text-gray-400">
              No tasks selected
            </p>
          ) : (
            <div className="space-y-3">
              {
                tasks.map(task => (
                  <div
                    key={task.id}
                    className="bg-gray-100 rounded-xl p-3"
                  >
                    <h3 className="font-semibold text-sm text-gray-700">
                      {task.title}
                    </h3>

                    <button
                      onClick={() => handleCompleteTask(task.id)}
                      className="btn btn-success btn-sm w-full mt-3 text-white"
                    >
                      Mark As Completed
                    </button>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
        <h2 className="font-bold text-lg text-gray-800 mb-5">
          Resolved Task
        </h2>

        {
          resolved.length === 0 ? (
            <p className="text-sm text-gray-400">
              No resolved task
            </p>
          ) : (
            <div className="space-y-3">
              {
                resolved.map(item => (
                  <div
                    key={item.id}
                    className="bg-indigo-100 rounded-xl p-3"
                  >
                    <h3 className="font-semibold text-sm text-gray-700">
                      {item.title}
                    </h3>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>

    </div>
  )
}

export default TaskStatus
