import React, { useState, useEffect } from "react";
import { Button as ButtonStyle } from "./Button";
import { NavLink } from "react-router-dom";
import {Button} from '@material-ui/core'
import { Menu, MenuItem } from '@material-ui/core'
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from '../components/Redux/userSlice';
import {useNavigate} from 'react-router-dom'

function Navbar() {
 
 const user = useSelector(selectUser)
 const dispatch = useDispatch()
 const navigate = useNavigate()

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [donate, setDonate] = useState(false)
 //logout functionality
 const handleLogout = (e) => {
   e.preventDefault()
   dispatch(logout())
   navigate('/')

 }

  const handleClickk = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

//style active links
const activeLinkStyle = ({isActive}) => {
  return {
    borderBottom : isActive ? "4px solid white" : "none"
  }
}

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Xpand
            <i className="fab fa-typo3" />
          </NavLink>
          <div className="menu-icon" onClick={handleClickk}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink style={activeLinkStyle} to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
              style={activeLinkStyle}
                to="/ourwork"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                OUR WORK
              </NavLink>
            </li>
            <li className="nav-item">
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="nav-links"
                style={{fontSize:"1.1rem", color:"white", fontWeight:"bolder",
                height: '100%' }}
               >
                      FLIGHTS
             </Button>
      <Menu style={{marginTop:"4rem"}}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       <NavLink to='/inspiration4' style={{color:"black", marginBottom:"1rem", border:"none" }}
                       className="nav-links" onClick={closeMobileMenu}> 
         <MenuItem style={{letterSpacing:"1px", fontWeight:"700", fontSize:"1rem"}} onClick={handleClose}>Inspiration4</MenuItem> 
       </NavLink>
       <NavLink to="/polaris" style={{color:"black",marginTop:"-2rem",textAlign:"center", border:"none"}} 
       className="nav-links" onClick={closeMobileMenu} >
        <MenuItem style={{letterSpacing:"1px", fontWeight:"700", fontSize:"1rem"}} onClick={handleClose}>Polaris</MenuItem>
        </NavLink>
      </Menu>

            </li>

            <li className="nav-item">
              <NavLink
              style={activeLinkStyle}
                to="/dictionary"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                DATA DICTIONARY
              </NavLink>
            </li>
            <li>
             
              <NavLink 
                to="/log-in"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                LOG IN
              </NavLink>
            
            </li>
           {/* )
           } */}
          </ul>
          {!user ?
           (button && <ButtonStyle buttonStyle="btn--outline">Log in</ButtonStyle>)
          :
          (
            <div>
            {/* <span style={{color: "white", marginRight:"1rem"}} >{user.name}</span> */}
           { button && <ButtonStyle buttonStyle="btn--outline"
            onClick={handleLogout}
          >Log out</ButtonStyle>}
          </div>
          )
          
          }
          {user && 
           <NavLink
                to="/payment" className="donate-logo" 
                style={{color:"white", marginLeft:"1rem", border:"1px solid white",textDecoration:"none" ,padding:"0.4rem 1rem"  }}
                onClick={()=>{setDonate(true)}} 
              >
                Donate
            </NavLink>
            }
          </div>
      </nav>
    </div>
  );
}

export default Navbar;