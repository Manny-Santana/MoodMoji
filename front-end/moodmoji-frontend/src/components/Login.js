import React, { Component } from "react";
import axios from "axios";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { CommunicationPresentToAll } from "material-ui/svg-icons";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.switchToSignUp = this.switchToSignUp.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.login = this.login.bind(this);
  }

  switchToSignUp() {
    this.props.signUpTrue();
    this.props.loginFalse();
  }
  login() {
    console.log("loggedin");
  }

  async handleClick() {
    console.log("handleclick", this);
    const apiBaseUrl = "http://localhost:3003/users/";
    console.log("handleclick", this);
    const payload = {
      email: this.state.email,
      password: this.state.password
    };

    const response = await axios.post(apiBaseUrl + "login", payload);

    // axios
    //   .post(apiBaseUrl + "login", payload)
    //   .then(function(response) {
    //     console.log(response);

    if (response.data === "wrong password") {
      console.log("Wrong Password");
      alert("Wrong Password");
    } else if (response.data === "invalid username") {
      console.log("Invalid UserName");
      alert("Invalid UserName");
    } else {
      // var uploadScreen=[];
      // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
      // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
      console.log("Login Succusessful");
      this.props.toggleLogin();
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
            <AppBar title="Login" />
            <TextField
              hintText="Enter your Username"
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
              onClick={() => this.handleClick()}
            />
            <RaisedButton
              label="Register a new Account"
              primary={true}
              style={style}
              onClick={this.switchToSignUp}
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
export default Login;
