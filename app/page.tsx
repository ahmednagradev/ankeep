import React from 'react'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
        <div></div>
      </div>
    </div>
  )
}

export default Home