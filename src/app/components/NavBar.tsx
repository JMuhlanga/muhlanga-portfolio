import React from 'react'

const NavBar = () => {
  return (
      <div className="flex items-center">
          <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
              <a href="#" className="py-2 px-6 flex">
                  Home
              </a>
              <a href="#" className="py-2 px-6 flex">
                  About
              </a>
              <a href="#" className="py-2 px-6 flex">
                  Skills
              </a>
              <a href="#" className="py-2 px-6 flex">
                  Contact
              </a>
          </nav>
          <button className="lg:hidden flex flex-col ml-4">
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
              </span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
              </span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
              </span>
          </button>
      </div>
  )
}

export default NavBar