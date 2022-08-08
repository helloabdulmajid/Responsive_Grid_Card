import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <NavLink to="/" activeclassname="active" >Home</NavLink>
    <NavLink to="/contact" activeclassname="active" >Contact</NavLink>

    </>
  )
}

export default Navbar