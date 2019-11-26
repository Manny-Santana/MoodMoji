import React, {Component} from "react";
import Login from './Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class  Register extends Component {
    constructor(props){
        super(props);
        this.state={
            fullName: '',
          email: '',
          password: ''
        }
    }

    handleClick(event) {
        const apiBaseUrl = "http://localhost:3003/users/";
        console.log("values",this.state.fullName,this.state.email,this.state.password);
        const self = this;
        const payload={
        "fullName": this.state.fullName,
        "email": this.state.email,
        "password": this.state.password
        }
        axios.post(apiBaseUrl+'/register', payload)
       .then(function (response) {
         console.log(response);
         if(response.data === "email address already exists"){
            console.log("email address already exists");
            alert("email address already exists");
         } else {
            console.log("registration successfull");
            const loginscreen = [];
            // loginscreen.push(<Login parentContext = {this} />);
            // const loginmessage = "Not Registered yet.Go to registration";
            // self.props.parentContext.setState({loginscreen: loginscreen,
            // loginmessage: loginmessage,
            // buttonLabel: "Register",
            // isLogin:true
            //  });
         }
       })
       .catch(function (error) {
         console.log(error);
       });
      }
    
    render() {
        return ( 
        <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your Full Name"
             floatingLabelText="Full Name"
             onChange = {(event,newValue) => this.setState({fullName:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
        </div>
        )
    }
}
const style = {
    margin: 15,
  };
export default Register;