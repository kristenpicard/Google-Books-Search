import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Saved from "./pages/Saved.js";
import Search from "./pages/Search.js";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </div>
    </Router>
  );
}

export default App;
