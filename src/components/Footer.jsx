const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 px-6 lg:px-12 py-12">

        <div>
          <h2 className="font-bold text-lg mb-4">
            CS — Ticket System
          </h2>

          <p className="text-sm text-gray-400 leading-6">
            Manage customer support tickets efficiently with progress tracking and task resolution.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Support</li>
            <li>Analytics</li>
            <li>Dashboard</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Help Center</li>
            <li>Documentation</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Social Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
        © 2026 CS — Ticket System. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer