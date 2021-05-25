import React, { useState, Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import LoginForm from "../LoginForm";
import { Container, Navbar, Col, Form, FormControl, Button } from "react-bootstrap";


import './style.scss';

function EndNavbar(props){
   const isloggedIn = props.login;

    if (isloggedIn) {
      return <p className="logged-in-text">
        {/* <Button buttonStyle='btn--outline' className="button"> */}
        <Link to="/logout"
        className='nav-links1'
        >Logout</Link> 
        {/* </Button> */}
        </p>;
    }
    else {
      return (
        <Fragment>
      <li>
        <Link
          to='/sign-up'
          className='nav-links'
          onClick={props.closeMobileMenu}
        >
            Sign Up
        </Link>
      </li>         
    <Button buttonStyle='btn--outline' className="button">
        <Link
          to='/login'
          className='nav-links'
          onClick={props.closeMobileMenu}
        > LOGIN
        </Link>
        </Button>
        </Fragment>
      )
    } }



















function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const { email, setEmail, loggedIn, setLoggedIn } = useContext(UserContext);
  // const [loginExpanded, setLoginExpanded] = useState(false);
  const {email, loggedIn} = useContext(UserContext);


  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/" className='navbar-logo'>
        <Link to='/' className='navbar-logo'>
          <span className="wave">🚻</span>SkipToTheLoo
            <i className='fab fa-typo3' />
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
        
        <EndNavbar login={loggedIn} closeMobileMenu={closeMobileMenu} email={email}/>
      

        {/* {(() => {
          if (loggedIn) {
            return <p className="logged-in-text">Logged in as {email} <Link to="/logout" >Logout</Link> </p>;
          }
          else {
            return (
              <Fragment>
            <li>
              <Link
                to='/sign-up'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                  Sign Up
              </Link>
            </li>         
          <Button buttonStyle='btn--outline' className="button">
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              > LOGIN
              </Link>
              </Button>
              </Fragment>
            )
          } }
        )} */}
      </ul>
    </Navbar>
  );
}

export default Nav;

