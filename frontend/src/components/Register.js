import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            fullName: '',
            email: '',
            password: '',
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            fullname: this.state.fullName,
            email: this.state.email,
            password: this.state.password
        };

        axios
            .post('http://localhost:8082/api/users',data)
            .then(res => {
                // this.setState({
                //     fullName: '',
                //     email: '',
                //     password: ''
                // })
            })
            .catch(err => {
                console.log("Error adding user!");
            })
        
        axios
            .get('http://localhost:8082/api/users/Washington',data)
            .then(res => {
                console.log(data);
            })
            .catch(err => {
                console.log("woops!");
            })
    };

    render() {
        return (
            <div className="LandingPage">
                <div className="container-fluid">
                    <form noValidate onSubmit={this.onSubmit}>
                        <h1 class="h3 mb-3 font-weight-normal">Register!</h1>
                        <label for="name">Full Name!</label>

                        <input type="text" class="form-control" id="name" name="fullname" value={this.state.fullname} onChange={this.onChange}></input>
                        <label for="inputEmail">Email</label>

                        <input type="email" class="form-control" id="inputEmail" name="email" value={this.state.email} onChange={this.onChange}></input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        <label for="pw">Password</label>

                        <input type="password" class="form-control" id="pw" name="password" value={this.state.password} onChange={this.onChange}></input><br />
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
