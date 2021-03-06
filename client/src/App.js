import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import UserContext from "./utils/UserContext";
import Landing from "./pages/Landing.js";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";
import WelcomeUser from "./pages/WelcomeUser";
import AddedBathrooms from "./pages/AddedBathrooms";


function App() {
  const [email, setEmail] = useState("");
  const [userName, setuserName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <UserContext.Provider value={{email, setEmail, loggedIn, setLoggedIn, userName, setuserName}}>
        <div>
          <Nav />
          <Switch>
          <Route path="/" exact component={Landing} />
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/welcome">
              <WelcomeUser />
            </Route>
            <Route exact path="/add">
              <AddedBathrooms/>
            </Route>
            <Route exact path="/sign-up">
              <SignUp />
            </Route>
            <Route exact path="/adding">
              <AddedBathrooms />
            </Route>
            <Route exact path="/welcome">
              <WelcomeUser />
            </Route>
            <Route exact path="/logout">
              <Logout />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
