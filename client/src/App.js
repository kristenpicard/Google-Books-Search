import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import NoMatch from "./pages/NoMatch";
import Saved from "./pages/Saved.js";
import Search from "./pages/Search.js";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
