import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import LoginSuccess from './components/LoginSuccess'
import SignupSuccess from './components/SignupSuccess'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/signup-success" element={<SignupSuccess />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

      </Routes>
    </Router>
  )
}

export default App