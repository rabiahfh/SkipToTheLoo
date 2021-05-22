
// import React from 'react';

// import useForm from './useForm';
// import './Form.css';

// const FormSignup = ({ submitForm }) => {
//   const { handleChange, handleSubmit, values, errors } = useForm(
//     submitForm,
//     validate
//   );

//   return (
//     <div className='form-content-right'>
//       <form onSubmit={handleSubmit} className='form' noValidate>
//         <h1>
//           Get started with us today! Create your account by filling out the
//           information below.
//         </h1>
//         <div className='form-inputs'>
//           <label className='form-label'>Username</label>
//           <input
//             className='form-input'
//             type='text'
//             name='username'
//             placeholder='Enter your username'
//             value={values.username}
//             onChange={handleChange}
//           />
//           {errors.username && <p>{errors.username}</p>}
//         </div>
//         <div className='form-inputs'>
//           <label className='form-label'>Email</label>
//           <input
//             className='form-input'
//             type='email'
//             name='email'
//             placeholder='Enter your email'
//             value={values.email}
//             onChange={handleChange}
//           />
//           {errors.email && <p>{errors.email}</p>}
//         </div>
//         <div className='form-inputs'>
//           <label className='form-label'>Password</label>
//           <input
//             className='form-input'
//             type='password'
//             name='password'
//             placeholder='Enter your password'
//             value={values.password}
//             onChange={handleChange}
//           />
//           {errors.password && <p>{errors.password}</p>}
//         </div>
//         <div className='form-inputs'>
//           <label className='form-label'>Confirm Password</label>
//           <input
//             className='form-input'
//             type='password'
//             name='password2'
//             placeholder='Confirm your password'
//             value={values.password2}
//             onChange={handleChange}
//           />
//           {errors.password2 && <p>{errors.password2}</p>}
//         </div>
//         <button className='form-input-btn' type='submit'>
//           Sign up
//         </button>
//         <span className='form-input-login'>
//           Already have an account? Login <a href='/login'>here</a>
//         </span>
//       </form>
//     </div>
//   );
// };

// export default FormSignup;









import React, { Fragment, useContext, useRef } from 'react';
// import "./style.scss";
import API from '../../utils/API';
import { Link } from "react-router-dom";
import UserContext from '../../utils/UserContext';
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
        // if the user hits enter or hits the button, this function will fire
        // event.preventDefault();
        // console.log("submit happened");
        // console.log({ email: emailInput.current.value, password: passwordInput.current.value});
        // API.testUserRouter()
        // .then(data => {
        //     console.log(data);
        // })
        // .catch(err => {
        //     console.log(err);
        // });
        API.signup({ email: emailInput.current.value, password: passwordInput.current.value})
            .then(data => {
                // console.log(data);
                setEmail(data.data.email);
                setLoggedIn(true);
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <Fragment>
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
                        <Link to='/login' >
                        <button type="submit" className="btn btn-primary"> Sign Up </button>
                        </Link>
                        
                    </form>
                    );
                }
                else {
                    return <h3>{email}</h3>;
                }
            })()
            }
        </Fragment>
    )
}

export default SignUpForm;