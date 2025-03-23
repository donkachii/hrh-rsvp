
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import RSVPForm from './components/RSVPForm'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rsvp" element={<RSVPForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
