import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./NavBar"
import Live from "./Live"
import Moments from "./Moments"
import Home from "./Home"
import RankSongs from "./RankSongs"


import "../App.css"

function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path = "/rank-songs">
          <RankSongs />
        </Route>
        <Route exact path ="/live">
          <Live />
        </Route>
        <Route exact path ="/moments">
          <Moments />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
