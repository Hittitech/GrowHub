import React from 'react'
import web  from "./images/coder.jpg"
// import { NavLink } from 'react-router-dom'
import Common from './Common'

const Home = () => {
  return (
    <>
    <Common
        name="Grow your business with"
        visit="/service"
        imgsrc={web}
         btnname="Get Started"
    />
    </>
  )
}

export default Home