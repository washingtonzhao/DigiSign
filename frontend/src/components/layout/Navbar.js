import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link 
                to="/"
                className="navbar-brand pl-5"
            >
                Digisign
            </Link>
            <div class="float-right">
                <Link 
                    to="/login"
                    className="font-weight-normal px-2"
                >
                    Log In
                </Link>

                <Link 
                    to="/register"
                    className="font-weight-bolder px-2"
                >
                    Make Your Own Page
                </Link>
            </div>
        </nav>
    );
  }
}
export default Navbar;