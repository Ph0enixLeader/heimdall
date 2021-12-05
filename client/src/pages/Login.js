import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { NavLink } from 'react-router-dom';

import InputTxt from "../components/cyberpunk/Cyber-input-txt";
import Cyberbutton from "../components/cyberpunk/Cyber-buttons";
import InputPsw from "../components/cyberpunk/Cyber-input-psw";

const Login = () => {
    return(
        <div className="Login">
            <Header/>
                <div className="row">
                    <div className="card-cyberpunk" >
                        <h1 >Welcome to Heimdall</h1>
                    </div>
                <div className="card-cyberpunk-wrapper">
                    <h1 >Login</h1>
                    <InputTxt name="Username"/>
                    <InputPsw name="password"/>
                    <NavLink exact to="/">
                    <Cyberbutton name="Login" tags="J117"/>
                    </NavLink>
                    <NavLink exact to="/">
                    <Cyberbutton name="Forgot password" tags="J117"/>
                    </NavLink>
                    <NavLink exact to="./register">
                    <Cyberbutton name="Register" tags="J117"/>
                    </NavLink>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;