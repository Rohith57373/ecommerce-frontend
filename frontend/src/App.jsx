import { useState } from 'react'
import './App.css'
import { Navigate, Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Whatsapp from './components/Whatsapp'
import { AuthProvide } from './context/AuthContext'

function App() {

  return (
    <>
      <AuthProvide>
        <Navbar />
        <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
          <Outlet />
        </main>
        <Footer />
        <Whatsapp />
      </AuthProvide>

    </>
  )
}

export default App
