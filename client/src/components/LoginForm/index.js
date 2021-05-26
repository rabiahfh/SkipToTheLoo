import React, { Fragment, useContext, useRef } from 'react';
import "./style.scss";
import API from '../../utils/API';
import UserContext from '../../utils/UserContext';
import { Link } from "react-router-dom";
import { useHistory  } from "react-router-dom";

function LoginForm(props) {
    const { email, setEmail, loggedIn, setLoggedIn, userName, setuserName } = useContext(UserContext);
    const history = useHistory();
    const emailInput = useRef();
    const passwordInput = useRef();
    let extraProps = {}
    if (props.className) {
        extraProps.className = props.className;
    }
    let emailId = props.className ? props.className + "-login-email" : "login-email";
    let emailHelpId = props.className ? props.className + "-login-email-help" : "login-email-help";
    let passwordId = props.className ? props.className + "-login-password" : "login-password";
    const handleSubmit = event => {
        // if the user hits enter or hits the button, this function will fire
        event.preventDefault();
        // console.log("submit happened");
        // console.log({ email: emailInput.current.value, password: passwordInput.current.value});
        API.login({ email: emailInput.current.value, password: passwordInput.current.value})
            .then(data => {
                // console.log(data);
                setEmail(data.data.email);
                // setuserName(data.data.userName);
                setLoggedIn(true);
                history.push("/welcome");
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <Fragment>
            <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
            <h1 style={{ fontSize:"30px", color:"rgb(240, 217, 17)"}}>
                Welcome to
            <span className="wave">🚻</span>SkipToTheLoo  
            <i className='fab fa-typo3' />
              </h1>
            { (() => {
                if (!loggedIn) {
                    return (<form {...extraProps} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor={emailId}>Email address</label>
                            <input ref={emailInput} type="email" className="form-control" id={emailId} aria-describedby={emailHelpId} />
                            <small id={emailHelpId} className="email-help-text form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor={passwordId}>Password</label>
                            <input ref={passwordInput} type="password" className="form-control" id={passwordId} />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    );
                }
                else {
                    return <h3>{email}</h3>;
                }
            })()
            }
            </form>
            </div>
        </Fragment>
    )
}

export default LoginForm;