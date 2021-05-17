import React, {useState, Fragment, useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import LoginForm from "../LoginForm";
import logo from "../../images/logo.PNG";
import { Container, Navbar, Col, Form, FormControl, Button } from "react-bootstrap";

import './style.scss';

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [loginExpanded, setLoginExpanded] = useState(false);
  const {email, loggedIn} = useContext(UserContext);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/" className='navbar-logo'>
      <Link to='/' className='navbar-logo'>
            SkipToTheLoo
            <i class='fab fa-typo3' />
      </Link>
      </Navbar.Brand>

      <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}      
      {/* { (() => {
        if(loggedIn){
          return <p className="logged-in-text">Logged in as {email} <Link to="/logout" onClick={ () => setLoginExpanded(false)}>Logout</Link> </p>;
        }
        else{
          if(!loginExpanded){
            return <button onClick={ () => setLoginExpanded(true) }>Login</button>;
          }
          else{
            return (
              <Fragment>
                <LoginForm className="top-menu-login"/>
                <button onClick={ () => setLoginExpanded(false) }>X</button>
              </Fragment>
            )
          } 
        }
      })()} */}
      
    </Navbar>
  );
}

export default Nav;

