import React, {useContext, useEffect} from 'react';
import API from '../utils/API';
import UserContext from '../utils/UserContext';

function Logout(props){
    const {setEmail, setLoggedIn} = useContext(UserContext);
    useEffect( () => {
        API.logout()
        .then( data => {
            setLoggedIn(false);
            setEmail("");
        })
        .catch(err => {
            console.log(err);
        });
    }, [setEmail, setLoggedIn])
    return (
        <div><p style={{
            textAlign:'center',
            paddingTop:'200px',
            fontSize:'50px',
            color:'rgb(240, 217, 17)'

        }}>You are now logged out.</p></div>
    )
}
export default Logout;