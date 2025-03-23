
import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Celebrant Photo */}
      <img
        src="https://via.placeholder.com/1200x800?text=Celebrant+Photo"
        alt="Celebrant"
        className="absolute inset-0 object-cover w-full h-full"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="mb-4 text-4xl font-bold">Celebration</h1>
        <p className="mb-6 text-lg">Join us in celebrating this special day!</p>
        <Link
          to="/rsvp"
          className="px-6 py-3 transition-colors bg-blue-600 rounded hover:bg-blue-700"
        >
          RSVP Now
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
