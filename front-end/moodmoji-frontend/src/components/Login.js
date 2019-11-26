import React, {Component} from "react";
import axios from "axios";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    
    handleClick(event) {
        const apiBaseUrl = "http://localhost:3003/users/";
        const self = this;
        const payload = {
            "email": this.state.email,
            "password": this.state.password
        }
        axios.post(apiBaseUrl+'login', payload)
        .then(function (response) {
            console.log(response);
            if(response.data === "wrong password"){
                console.log("Wrong Password");
                alert("Wrong Password");
            }
            else if(response.data === "invalid username"){
                console.log("Invalid UserName");
                alert("Invalid UserName")
            }
            else{
                // var uploadScreen=[];
                // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
                // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
                console.log("Login Succusessful");
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
                <AppBar title="Login" />
                <TextField
                hintText="Enter your Username"
                floatingLabelText="Email"
                onChange = {(event,newValue) => this.setState({email:newValue})}
                />
                <br/>
                <TextField
                type="password"
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
export default Login;