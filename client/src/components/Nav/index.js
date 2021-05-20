import React, {useState, Fragment, useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import LoginForm from "../LoginForm";
import { Container, Navbar, Col, Form, FormControl, Button } from "react-bootstrap";

import './style.scss';

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/" className='navbar-logo'>
      <Link to='/' className='navbar-logo'>
      <span className="wave">🚻</span>SkipToTheLoo  
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
                to='/adding'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Add a Loo
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/rate'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Rate a Loo
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>         
          </ul>
          <Button buttonStyle='btn--outline' className="button">
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              > LOGIN
              </Link>
              </Button>
          {/* {button && <Button buttonStyle='btn--outline'>LOGIN IN</Button>}       */}
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

