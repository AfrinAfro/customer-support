import vector1 from '../assets/vector1.png'

const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 lg:px-12 mt-8">

      {/* IN PROGRESS */}
      <div
        className="rounded-3xl p-8 text-white shadow-lg bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `
            url(${vector1}),
            linear-gradient(to right, #7c3aed, #8b5cf6)
          `
        }}
      >

        <p className="text-sm opacity-80 mb-2">
          In Progress
        </p>

        <h2 className="text-5xl font-bold">
          {inProgress}
        </h2>

      </div>


      {/* RESOLVED */}
      <div
        className="rounded-3xl p-8 text-white shadow-lg bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `
            url(${vector1}),
            linear-gradient(to right, #22c55e, #14b8a6)
          `
        }}
      >

        <p className="text-sm opacity-80 mb-2">
          Resolved
        </p>

        <h2 className="text-5xl font-bold">
          {resolved}
        </h2>

      </div>

    </div>
  )
}

export default Banner