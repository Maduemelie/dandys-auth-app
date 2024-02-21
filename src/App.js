import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import LoginSuccess from './components/LoginSuccess'
import SignupSuccess from './components/SignupSuccess'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/signup-success" element={<SignupSuccess />} />

      </Routes>
    </Router>
  )
}

export default App