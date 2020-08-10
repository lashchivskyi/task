import React, { Component } from "react";
import Search from "./search";
import Paginator from "./paginator";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  render = () => {
    return (
      <div>
        <div className="navLink">
          <NavLink className="padding" to="/search">
            Search
          </NavLink>
          <NavLink to="/paginator">Paginator</NavLink>
        </div>
        <Route path="/paginator" render={() => <Paginator />} />
        <Route path="/search" render={() => <Search />} />
      </div>
    );
  };
}

export default App;
