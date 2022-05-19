import React from 'react'
import { Link } from 'react-router-dom';
import './Flight.css'
const Flights = () => {
  return (<div>
  
       <div className="flight-link-bar">
         <ul style={{display:"flex", justifyContent:"space-around"}}>
            <li>
              <Link to='/inspiration4' 
              className="links"
               >
               Inspiration 4
              </Link>
            </li>
            <li >
              <Link
                to='/abc'
                className="links"
              >
                ABC
              </Link>
            </li>
          </ul>
       </div>
     </div> );
    }

export default Flights
