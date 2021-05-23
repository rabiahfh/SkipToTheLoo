import React, {useState, Fragment, useContext} from "react";
import './Form.css';
// import Img2 from "./images/Img-2.PNG"
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const FormSuccess = () => {
         
    const [click, setClick] = useState(false); 
    const closeMobileMenu = () => setClick(false);
  return (
    <div className='form-content-right'>
      <h1> SKIP TO THE LOO <span className="wave">🚻</span> </h1>
      <Button buttonStyle='btn--outline' className="button">
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              > LOGIN
              </Link>
              </Button>
      {/* <img className='form-img-2' src={Img2} alt='success-image' /> */}
    </div>
  );
};

export default FormSuccess;