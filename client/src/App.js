import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import GiveBack from "./pages/givebackentry";
import KeepTrack from "./pages/keeptrack";
import Welcome from "./pages/welcome";
import Nav from "./components/Nav";

function Wrapper(props) {
  return (
    <>
      <Nav />
      {props.children}
      {/* <Footer/> */}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Wrapper>
              <Route exact path="/welcome" component={Welcome} />
              <Route exact path="/givebackentry" component={GiveBack} />
              <Route exact path="/keeptrack" component={KeepTrack} />
            </Wrapper>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
