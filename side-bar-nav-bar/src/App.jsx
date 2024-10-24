import React, { useState } from 'react'
import Sidebar from './Componenets/Sidebar'
import Dasboard from './Componenets/Dasboard'

const App = () => {
  const [sidebarToggle, setsidebarToggle] = useState(false)
  return (
  <div className='flex'>
    <Sidebar sidebarToggle={sidebarToggle}/>
    <Dasboard 
    sidebarToggle={sidebarToggle}
    setsidebarToggle={setsidebarToggle}/>
  </div>
  )
}

export default App