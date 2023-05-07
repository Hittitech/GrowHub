import React from 'react';
// import web from '../src/images/.png';
import { NavLink } from 'react-router-dom';


const Common = (props) => {
  return (
    <>
    <section id='header' className='d-flex align-items-center'>
    <div className="container-fluid">
        <div className="row">
        <div className="col-10 mx-auto">
        <div className='row'>
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
              <h1>{props.name}
              <strong className='brand-name'>GrowMania</strong></h1>
              <h2 className='my-3'> We are the team of talented developer making websites</h2>
              <div className='mt-3'>
                <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink >
              </div>
              </div> 
              <div className='col-lg-6 order-1 order-lg-2 header-img'>
             <img src={props.imgsrc} className='img-fluid animation' alt='img'     />
              </div>
              </div>
        </div>
        </div>
        </div>
    </section>
      
    </>
  );
}

export default Common;


// import React from 'react'
// // import web  from "./images/firsty.png"
// import { NavLink } from 'react-router-dom'

// const Common = (props) => {
//   return (
//     <>
//     <section id="header" className="d-flex align-items-center">
//     <div className='container-fluid nav_bg '>
//     <div className='row'>
//         <div className='col-10 mx-auto'>
//         <div className='row'>
//             <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
//             <h1>
//                 {/* Grow your business with <strong className="brand-name" >Adnan Sami.org</strong> */}
//                  {props.name} 
//                 <strong className="brand-name" > GrowHub.org</strong>
//             </h1>
//             <h2 className='my-3'>
//                 We are a team of talented individuals
//             </h2>
//             <div 
//             className='mt-3 butty'>
//                 <NavLink to={props.visit} className="btn  btn-outline-primary ">
//                 {props.btnname}
//                 </NavLink>
//             </div>
//             </div>


//         <div className='col-lg-6 order-1 order-lg-2  header-img '>
//         <img  src={props.imgsrc}  className='img-fluid-animated anime' alt='Commonimg'/>

//         </div>
//         </div>
//         </div>
//     </div>

//     </div>

//     </section>
  
//     </>
//   )
// }

// export default Common