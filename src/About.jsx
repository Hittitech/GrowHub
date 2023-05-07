import React from 'react'
import Common from './Common'
import webi from "./images/developer.jpg"

const About = () => {
  return (
    <Common
        name="Welcome to About Page"
        imgsrc={webi}
        btnname="Contact Us"
        visit="/contact"

    />
  )
}

export default About