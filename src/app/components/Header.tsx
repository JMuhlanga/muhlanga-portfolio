import React from 'react'
import NavBar from './NavBar'
import { profile } from '@/data/resume'

const Header = () => {
  return (
        <header className="h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
                {profile.name}
            </div>
            <NavBar />
        </div>
    </header>
  )
}

export default Header