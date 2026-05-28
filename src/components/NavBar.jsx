import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="flex py-4 justify-around items-center py- bg-gray-900 border-b border-gray-700 shadow-md">
      
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-2xl font-semibold transition hover:text-blue-400 ${
            isActive ? "text-blue-500" : "text-gray-200"
          }`
        }
      >
        TodoList
      </NavLink>

      <NavLink
        to="/timer"
        className={({ isActive }) =>
          `text-2xl font-semibold transition hover:text-blue-400 ${
            isActive ? "text-blue-500" : "text-gray-200"
          }`
        }
      >
        Timer
      </NavLink>

    </div>
  )
}

export default NavBar
