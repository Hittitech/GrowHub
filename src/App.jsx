import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';
import { Route, Routes,Navigate} from 'react-router-dom';


const App = () => {
  return (
    <>
    <Navbar />
    <Routes >
    <Route exact path='/' Component={Home} />
    <Route exact path='/about' Component={About} />
    <Route exact path='/service' Component={Service} />
    <Route exact path='/contact' Component={Contact} />
    <Route path ='*' element = {<Navigate to="/"/> }/>
      </Routes>
    </>
  );
}

export default App;

// import React from 'react'
// import Navbar from './Navbar'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
// import Home from './Home'
// import About from './About'
// import Service from './Service'
// import Contact from './Contact'
// import {Routes,Route, Navigate} from "react-router-dom"
// import Footer from './Footer'

// const App = () => {
//   return (
//     <>
//     <Navbar/>
//       <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path='/about' element={<About/>} />
//       <Route path='/service' element={<Service/>} />
//       <Route path='/contact' element={<Contact/>} />
//       <Route path="*" element={<Navigate to ="/" />}/>
//     </Routes> 
//     <Footer/>
//     </>
    
    
//   )
// }

// export default App