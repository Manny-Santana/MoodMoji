import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: ""
    };
    this.switchToLogin = this.switchToLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  switchToLogin() {
    this.props.loginTrue();
    this.props.signUpFalse();
  }

  async handleClick(event) {
    const apiBaseUrl = "http://localhost:3003/users/";

    const payload = {
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password
    };

    const response = await axios.post(apiBaseUrl + "/register", payload);
    // axios
    //   .post(apiBaseUrl + "/register", payload)
    //   .then(function(response) {
    if (response.data === "email address already exists") {
      console.log("email address already exists");
      alert("email address already exists");
    } else {
      console.log("registration successfull");

      this.props.toggleLogin();
      //       const loginscreen = [];
      //       // loginscreen.push(<Login parentContext = {this} />);
      //       // const loginmessage = "Not Registered yet.Go to registration";
      //       // self.props.parentContext.setState({loginscreen: loginscreen,
      //       // loginmessage: loginmessage,
      //       // buttonLabel: "Register",
      //       // isLogin:true
      //       //  });
    }
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Register" />
            <TextField
              hintText="Enter your Full Name"
              floatingLabelText="Full Name"
              onChange={(event, newValue) =>
                this.setState({ fullName: newValue })}
            />
            <br />
            <TextField
              hintText="Enter your Email"
              type="email"
              floatingLabelText="Email"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
            <RaisedButton
              label="Login Instead"
              primary={true}
              style={style}
              onClick={this.switchToLogin}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15
};
export default Register;
