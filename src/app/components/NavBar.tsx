import React from 'react'

const NavBar = () => {
  return (
      <div class="flex items-center">
          <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
              <a href="#" class="py-2 px-6 flex">
                  Home
              </a>
              <a href="#" class="py-2 px-6 flex">
                  About
              </a>
              <a href="#" class="py-2 px-6 flex">
                  Skills
              </a>
              <a href="#" class="py-2 px-6 flex">
                  Contact
              </a>
          </nav>
          <button class="lg:hidden flex flex-col ml-4">
              <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
              </span>
              <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
              </span>
              <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
              </span>
          </button>
      </div>
  )
}

export default NavBar