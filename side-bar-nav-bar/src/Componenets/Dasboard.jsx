import React from 'react'
import Navbar from './Navbar'

const Dasboard = ({sidebarToggle, setsidebarToggle}) => {
  return (
   <div className={`${sidebarToggle ? "" : " ml-64 1"} w-full`}>
    <Navbar
    sidebarToggle={sidebarToggle}
    setsidebarToggle={setsidebarToggle}/>
   </div>
  )
}

export default Dasboard