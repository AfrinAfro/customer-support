const TicketCard = ({ ticket, handleAddTask }) => {

  const {
    title,
    description,
    customer,
    priority,
    createdAt,
  } = ticket

  const getBadgeColor = () => {
    if (priority === 'High') {
      return 'badge badge-success badge-sm'
    }

    if (priority === 'Medium') {
      return 'badge badge-warning badge-sm'
    }

    return 'badge badge-error badge-sm'
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all duration-300">

      <div className="flex justify-between items-start gap-3">
        <h2 className="font-bold text-gray-800 text-lg leading-6">
          {title}
        </h2>

        <span className={getBadgeColor()}>
          {priority}
        </span>
      </div>

      <p className="text-sm text-gray-500 mt-3 leading-6">
        {description}
      </p>

      <div className="border-t border-dashed border-gray-300 my-4"></div>

      <div className="flex items-center justify-between text-sm text-gray-600">
        <div>
          <p className="font-semibold">
            {customer}
          </p>

          <p className="text-xs text-gray-400 mt-1">
            {createdAt}
          </p>
        </div>

        <button
          onClick={() => handleAddTask(ticket)}
          className="btn btn-success btn-sm rounded-lg text-white"
        >
          Add
        </button>
      </div>

    </div>
  )
}

export default TicketCard