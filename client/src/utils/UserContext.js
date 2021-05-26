import {createContext} from 'react';

const UserContext = createContext({
    userName: "",
    setuserName: () => {},
    email: "",
    setEmail: () => {},
    loggedIn: false,
    setLoggedIn: () => {}
});

export default UserContext;