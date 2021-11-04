import React, { Component } from "react";
import { CgDarkMode, CgProfile } from "react-icons/cg";
import { Link, Redirect } from 'react-router-dom';

class Navbar extends Component {
  state = {
    currentUser:{}
  };
  handleLogout = () => {
    localStorage.clear();
		this.props.handleLogout();

  }
  componentDidMount() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser) {
      this.setState({currentUser});
    } else {
      return <Redirect to='/' />
    }
  }
  
  render() {
    const { currentUser } = this.state;
    return (
      <header className="header">
        <div className="log">
          <h1 style= {{fontStyle:"italic", marginLeft: "120px"}}>SMART PARKING</h1>
        </div>
        <div className="sideTwo">
          <div className="darkMode">
            <span>
              <CgDarkMode />
            </span>
          </div>
          <div className="logged">
            <span>{currentUser.name}</span>
            <div className="picture">
              <CgProfile />
            </div>
            <span onClick={this.handleLogout}><Link style={{ textDecoration: "none"}} to='/'>Log out</Link> </span>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
