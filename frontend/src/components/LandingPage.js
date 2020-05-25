import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class LandingPage extends Component {

    render() {
        //add something here eventually once user login figured out 

        return (
            <div className="LandingPage">
                <div className="container-fluid">
                    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white">
                        <h2 className="my-0 mr-md-auto font-weight-normal">Digisign</h2>
                        <Link to="/get-started" className="btn btn-outline-primary" href="#">Sign up</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
