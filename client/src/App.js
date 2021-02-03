import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from "./pages/login"
import Signup from "./pages/signup"
import GiveBack from "./pages/givebackentry"
import KeepTrack from "./pages/keeptrack"
import Welcome from "./pages/welcome"

function Wrapper(props) {
  return (
    <>
      {/* <Nav/> */}
      {props.children}
      {/* <Footer/> */}
    </>
  )
}

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Login />
            <Route exact path="/signup" component={Signup} />
            <Wrapper>
              <Route exact path="/welcome" component={Welcome} />
              <Route exact path="/giveback" component={GiveBack} />
              <Route exact path="/keeptrack" component={KeepTrack} />
            </Wrapper>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
