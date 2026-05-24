navbar

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b border-gray-200 px-4 lg:px-12 py-3">
      <div className="flex-1">
        <a className="text-xl lg:text-2xl font-bold text-gray-800">
          CS — Ticket System
        </a>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <a className="text-sm text-gray-500 hover:text-primary cursor-pointer">
          Home
        </a>

        <a className="text-sm text-gray-500 hover:text-primary cursor-pointer">
          Tickets
        </a>

        <a className="text-sm text-gray-500 hover:text-primary cursor-pointer">
          Progress
        </a>

        <a className="text-sm text-gray-500 hover:text-primary cursor-pointer">
          Analytics
        </a>

        <button className="btn btn-primary rounded-full btn-sm px-6 text-white">
          New Ticket
        </button>
      </div>

      <div className="dropdown dropdown-end md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
          ☰
        </div>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><a>Home</a></li>
          <li><a>Tickets</a></li>
          <li><a>Progress</a></li>
          <li><a>Analytics</a></li>
          <li className="mt-2">
            <button className="btn btn-primary btn-sm">
              New Ticket
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar