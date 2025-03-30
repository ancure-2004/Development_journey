import React from 'react'
import { Link, NavLink } from 'react-router-dom' // in react we use link tag not anchor tag
import "./Navigationbar.css"

const Navigationbar = () => {
  return (
    <div>
      <ul>
        <li>
            <NavLink to='/' className={({isActive}) => isActive ? "active-link" : ""}>
              Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/about' className={({isActive}) => isActive ? "active-link" : ""}>
              About
            </NavLink>
        </li>
        <li>
            <NavLink to='/dashboard' className={({isActive}) => isActive ? "active-link" : ""}>
             Dashboard
            </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navigationbar
