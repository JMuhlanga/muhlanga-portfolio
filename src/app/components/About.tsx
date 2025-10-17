import React from 'react'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Summary from './Summary'

const About = () => {
  return (
    <div>
        <Summary />
        <Skills />
        <Experience />
        <Education />
    </div>
  )
}

export default About