import React from 'react'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Summary from './Summary'

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
      <div>
        <h2 className="font-bebas-neue uppercase text-3xl sm:text-4xl font-black flex flex-col leading-none dark:text-white text-gray-800 mb-12">
          About Me
        </h2>
      </div>
      <div>
                <Summary />
        <Skills />
        <Experience />
        <Education />
      </div>
    </div>
  )
}

export default About