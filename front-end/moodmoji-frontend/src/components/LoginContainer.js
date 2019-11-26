import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      signup: false
    };
    this.loginTrue = this.loginTrue.bind(this);
    this.loginFalse = this.loginFalse.bind(this);
    this.signUpTrue = this.signUpTrue.bind(this);
    this.signUpFalse = this.signUpFalse.bind(this);
  }

  loginTrue() {
    console.log("changed login to true");
    this.setState({
      login: true
    });
  }
  loginFalse() {
    console.log("changed login to false");
    this.setState({
      login: false
    });
  }
  signUpTrue() {
    console.log("changed signup to true");
    this.setState({
      signup: true
    });
  }
  signUpFalse() {
    console.log("changed signup to false");
    this.setState({
      signup: false
    });
  }

  render() {
    //show will change based on the local state, rendering either the login or sign up page at any given time

    let show;
    if (this.state.login === false && this.state.signup === false) {
      show = (
        <div>
          <div>
            <button onClick={this.loginTrue}>Login</button>
          </div>
          <div>
            <button onClick={this.signUpTrue}>Sign Up</button>
          </div>
        </div>
      );
    } else if (this.state.login === true) {
      show = (
        <div>
          <Login
            loginFalse={this.loginFalse}
            signUpTrue={this.signUpTrue}
            toggleLogin={this.props.toggleLogin}
          />
        </div>
      );
    } else if (this.state.signup === true) {
      show = (
        <div>
          <Register
            loginTrue={this.loginTrue}
            signUpFalse={this.signUpFalse}
            toggleLogin={this.props.toggleLogin}
          />
        </div>
      );
    }

    return (
      <div>
        {show}
      </div>
    );
  }
}

export default LoginContainer;
