import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { NavLink } from 'react-router-dom';

import Cyberbutton from "../components/cyberpunk/Cyber-buttons";
import InputTxt from "../components/cyberpunk/Cyber-input-txt";
import InputEmail from "../components/cyberpunk/Cyber-input-email";
import InputPsw from "../components/cyberpunk/Cyber-input-psw";

const Register = () => {
    return(
        <div className="Register">
            <Header/>
            <div className="card-cyberpunk">
                <h1>Register</h1>
                <NavLink exact to="/">
                    <Cyberbutton name="Back" tags="J117"/>
                </NavLink>
            </div>

            <div className="row">
                <div className="leftcolumnrow">
                    <div className="card-cyberpunk-wrapper">
                    <InputTxt name="Name"/>
                    <InputTxt name="Firstname"/>
                    <InputEmail name="Email"/>
                    </div>
                </div>
                <div className="rightcolumnrow">
                    <div className="card-cyberpunk-wrapper">
                    <InputTxt name="Username"/>
                    <InputPsw name="Password_retype"/>
                    <InputPsw name="password"/>
                    </div>
                    <div className="card-cyberpunk">
                        <h1>Register</h1>
                        <NavLink exact to="/">
                            <Cyberbutton name="Submit" tags="J117"/>
                        </NavLink>
                    </div>
                </div>
        </div>
            <Footer/>
        </div>
    );
}

export default Register;