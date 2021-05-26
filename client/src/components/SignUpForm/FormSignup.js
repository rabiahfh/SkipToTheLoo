import React, { Fragment, useContext, useRef, useState} from 'react';
// import "./style.scss";
import API from '../../utils/API';
import { Link } from "react-router-dom";
import UserContext from '../../utils/UserContext';
import './Form.css';
import validate from './validateInfo';
import useForm from './useForm';



function SignUpForm(props) {

    const { handleChange, values, errors } = useForm(
        validate
      );

    const [boxError, setBoxError] = useState("");

    const { email, setEmail, loggedIn, setLoggedIn, userName } = useContext(UserContext);
    const userNameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    let extraProps = {}
    if (props.className) {
        extraProps.className = props.className;
    }
    let emailId = props.className ? props.className + "-signup-email" : "signup-email";
    let emailHelpId = props.className ? props.className + "-signup-email-help" : "signup-email-help";
    let passwordId = props.className ? props.className + "-signup-password" : "signup-password";
    let userNameId = props.className ? props.className + "-signup-userName" : "signup-userName";
    const handleSubmit = event => {
        event.preventDefault();
        API.signup({ email: emailInput.current.value, password: passwordInput.current.value, userName: userNameInput.current.value })
            .then(data => {
                console.log(data);
                console.log("string");
                setEmail(data.data.email);
                setLoggedIn(true);
                setBoxError("");
            })
            .catch(err => {
                console.log(err);
                window.debugsomethingwhatever=err;
                setBoxError(JSON.stringify(err.response.data._message))
            });
    }
    return (
        <Fragment>
            { (() => {
                if (!loggedIn) {
                    return (
                        <div className='form-content-right'>
                            <form {...extraProps} onSubmit={handleSubmit} className="form">
                                <h1>
                                    Get started with us today! Create your account by filling out the
                                    information below.
                                </h1>
                                    <div className="form-group">
                                    <label htmlFor={userNameId}>User Name</label>
                                    <input ref={userNameInput} type="text" className="form-control1" id={userNameId} 
                                    name='username'
                                    value={values.username}
                                    onChange={handleChange} />
                                    {errors.username && <p>{errors.username}</p>}
                                    </div>
                                <div className="form-group">
                                    <label htmlFor={emailId}>Email address</label>
                                    <input ref={emailInput} type="email" className="form-control1" id={emailId} aria-describedby={emailHelpId}
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    />
                                    <small id={emailHelpId} className="email-help-text form-text text-muted">We'll never share your email with anyone else.</small>
                                    {errors.email && <p>{errors.email}</p>}                              
                                </div>
                                <div className="form-group">
                                    <label htmlFor={passwordId}>Password</label>
                                    <input ref={passwordInput} type="password" className="form-control1" id={passwordId} 
                                    name='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    />
                                    {errors.password && <p>{errors.password}</p>}
                                </div>
                                {/* <Link to='/login' > */}
                                <button type="submit" className="btn btn-primary"> Sign Up </button>
                                {boxError}
                                {/* </Link> */}
                            </form>
                        </div>
                    );
                    }  else {
                    return <h3>{email}</h3>;
                }
            })()
            }
        </Fragment>
    );
}

export default SignUpForm;