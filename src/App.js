import React, { Component } from "react";
import "./sass/App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navBar";
import Home from "./components/home";
import Login from './components/LogIn';
import ProtectedRoute from './components/protectedRoute';

class App extends Component {
  state = {
    showMenu: 0,
  };
  handleShowMenu = () => {
    let showMenu = this.state.showMenu;
    showMenu += 1;
    if (showMenu === 4) showMenu = 0;
    this.setState({ showMenu });
  };


render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route
            path="/"
            render={(props) => <Navbar onShowMenu={this.handleShowMenu} />}
          />
        </Switch>
        
        <ProtectedRoute
          path="/home"
          isAuth={true}
          component={Home}
          ShowMenu={this.state.showMenu}
        />
      </div>
    );
  }
}

export default App;


