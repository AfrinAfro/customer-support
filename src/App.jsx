import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import TicketCard from './components/TicketCard'
import TaskStatus from './components/TaskStatus'
import Footer from './components/Footer'

import vector2 from './assets/vector2.png'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

  const [tickets, setTickets] = useState([])
  const [tasks, setTasks] = useState([])
  const [resolved, setResolved] = useState([])


  useEffect(() => {
    fetch('/tickets.json')
      .then(res => res.json())
      .then(data => setTickets(data))
  }, [])


  // ADD TASK
  const handleAddTask = (ticket) => {

    const exists = tasks.find(task => task.id === ticket.id)

    if (exists) {
      toast.warning('Ticket already added!')
      return
    }

    setTasks([...tasks, ticket])

    toast.success('Ticket added to progress!')
  }


  // COMPLETE TASK
  const handleCompleteTask = (id) => {

    const completedTask = tasks.find(task => task.id === id)


    // REMOVE FROM TASK STATUS
    const remainingTasks = tasks.filter(task => task.id !== id)
    setTasks(remainingTasks)


    // ADD TO RESOLVED LIST
    setResolved([...resolved, completedTask])


    // REMOVE FROM CUSTOMER TICKETS
    const remainingTickets = tickets.filter(ticket => ticket.id !== id)
    setTickets(remainingTickets)


    toast.success('Ticket resolved successfully!')
  }


  return (
    <div className="bg-[#f5f5f5] min-h-screen">

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

      <Navbar />

      <Banner
        inProgress={tasks.length}
        resolved={resolved.length}
      />


      {/* MAIN SECTION */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-12 py-8 bg-cover bg-center"
        style={{
          backgroundImage: `url(${vector2})`
        }}
      >

        {/* LEFT SIDE */}
        <div className="lg:col-span-2">

          <h2 className="font-bold text-gray-700 mb-5">
            Customer Tickets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {
              tickets.map(ticket => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  handleAddTask={handleAddTask}
                />
              ))
            }

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div>
          <TaskStatus
            tasks={tasks}
            resolved={resolved}
            handleCompleteTask={handleCompleteTask}
          />
        </div>

      </div>

      <Footer />

    </div>
  )
}

export default App