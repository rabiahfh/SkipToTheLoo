import React, { Fragment, useContext, useRef } from 'react';
// import "./style.scss";
import API from '../../utils/API';
import { Link } from "react-router-dom";
import UserContext from '../../utils/UserContext';
import './Form.css';
import validate from './validateInfo';

function SignUpForm(props) {
    const { email, setEmail, loggedIn, setLoggedIn } = useContext(UserContext);
    const emailInput = useRef();
    const passwordInput = useRef();
    let extraProps = {}
    if (props.className) {
        extraProps.className = props.className;
    }
    let emailId = props.className ? props.className + "-signup-email" : "signup-email";
    let emailHelpId = props.className ? props.className + "-signup-email-help" : "signup-email-help";
    let passwordId = props.className ? props.className + "-signup-password" : "signup-password";
    const handleSubmit = event => {
        event.preventDefault();
        API.signup({ email: emailInput.current.value, password: passwordInput.current.value })
            .then(data => {
                console.log(data);
                console.log("string");
                setEmail(data.data.email);
                setLoggedIn(true);
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <Fragment>
            {/* <div className='form-content-right'> */}
            {/* <form onSubmit={handleSubmit} className='form' noValidate> */}
            {/* <h1>
              Get started with us today! Create your account by filling out the
              information below.
              </h1> */}
            { (() => {
                if (!loggedIn) {
                    return (
                        <div className='form-content-right'>
                            <form {...extraProps} onSubmit={handleSubmit} className="form">
                                <h1>
                                    Get started with us today! Create your account by filling out the
                                    information below.
                                </h1>
                                <div className="form-group ">
                                    <label htmlFor={emailId}>Email address</label>
                                    <input ref={emailInput} type="email" className="form-control" id={emailId} aria-describedby={emailHelpId} />
                                    <small id={emailHelpId} className="email-help-text form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor={passwordId}>Password</label>
                                    <input ref={passwordInput} type="password" className="form-control" id={passwordId} />
                                </div>
                                 {/* <Link to='/login' > */}
                                    <button type="submit" className="btn btn-primary"> Sign Up </button>
                                {/* </Link> */}
                            </form>
                            </div>
                    );
                    
                }
                else {
                    return <h3>{email}</h3>;
                }
            })()
            }

                            {/* </form> */}
                            {/* </div> */}
        </Fragment>
                    );
                }

                export default SignUpForm;