import React from 'react'
import { Route, Routes } from 'react-router'
import Register from './pages/Register'
import Login from './pages/Login'
import Layout from './pages/Layout'
import User from './pages/User'
import Assignment from './pages/Assignment'
import SubmittedAssignments from './pages/SubmittedAssignments'


function App() {
  return (
    <div className='bg-gray-800 text-white w-full h-screen p-6'>
      <Routes>
        <Route path='' element={<Layout />} >
          <Route path='/user/register' element={<Register/>} />
          <Route path='/admin/register' element={<Register/>} />
          <Route path='/:role/login' element={<Login />} />
          <Route path='/user/admins' element={<User />} />
          <Route path='/user/upload' element={<Assignment />} />
          <Route path='/admin/assignments' element={<SubmittedAssignments />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
