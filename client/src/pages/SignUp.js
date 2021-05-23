import React, { useContext } from 'react';
import SignUpForm from '../components/SignUpForm/FormSignup';
import {Redirect} from 'react-router-dom';
import UserContext from '../utils/UserContext';

function SignUp(props){
    const {loggedIn} = useContext(UserContext);
    return (
        <div className="container">
            {loggedIn && <Redirect to="/welcome" />}
            <h1 style={{ textAlign: "center" }} >SignUp</h1>
            <SignUpForm className="full-page-signup" />
        </div>
    )
}
export default SignUp;


// import React from 'react';
// import './App.css';
// import Form from '../../src/components/SignUpForm/Form';

// function App() {
//   return <Form />;
// }

// export default App;