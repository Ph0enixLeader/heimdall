import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { NavLink, useHistory } from 'react-router-dom';

import Footer from "../components/Footer";
import Header from "../components/Header";
import InputTxt from "../components/cyberpunk/Cyber-input-txt";
import Cyberbutton from "../components/cyberpunk/Cyber-buttons";
import InputPsw from "../components/cyberpunk/Cyber-input-psw";

function Login (){
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");
    const history = useHistory();

    Axios.defaults.withCredentials = true;
    
    const submit = () => {
        Axios.post("http://localhost:3001/api/login", {
          Username: Username,
          Password: Password,
        }).then((response) => {
          if (response.data.message) {
            setLoginStatus(response.data.message);
          } else {
            history.push("/Home");
          }
        });
      };

      useEffect(() => {
        Axios.get("http://localhost:3001/api/login").then((response) => {
          if (response.data.loggedIn === true) {
            history.push("/Home");
          } else {
            console.log(response);
          };
        });
      },);

    return(
        <div className="Login">
            <Header/>
                <div className="row">
                    <div className="card-cyberpunk" >
                        <h1 >Welcome to Heimdall</h1>
                        <h1 >{loginStatus}</h1>
                    </div>
                <div className="card-cyberpunk-wrapper">
                    <h1 >Login</h1>
                    <InputTxt name="Username" action={(e) => {setUsername(e.target.value);}}/>
                    <InputPsw name="password" action={(e) => {setPassword(e.target.value);}}/>
                    <NavLink exact to="/">
                    <Cyberbutton name="Forgot password" tags="J117"/>
                    </NavLink>
                    <NavLink exact to="./register">
                    <Cyberbutton name="Register" tags="J117"/>
                    </NavLink>
                    <Cyberbutton name="Login" tags="J117" action={submit}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;