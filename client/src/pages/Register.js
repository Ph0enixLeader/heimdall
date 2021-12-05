import React, { useState } from "react";
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

import Footer from "../components/Footer";
import Header from "../components/Header";
import Cyberbutton from "../components/cyberpunk/Cyber-buttons";
import InputTxt from "../components/cyberpunk/Cyber-input-txt";
import InputEmail from "../components/cyberpunk/Cyber-input-email";
import InputPsw from "../components/cyberpunk/Cyber-input-psw";


function Register(){
const [Name, setName] = useState("");
const [Lastname, setLastname] = useState("");
const [Email, setEmail] = useState("");
const [Username, setUsername] = useState("");
const [Password, setPassword] = useState("");

const submit = () => {
    Axios.post("http://localhost:3001/api/insert", {
        Name: Name,
        Lastname: Lastname,
        Email: Email,
        Username: Username,
        Password: Password,
    });alert('Successful insert');
};

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
                    <InputTxt name="Name" action={(e) => {setName(e.target.value);}}/>
                    <InputTxt name="Lastname" action={(e) => {setLastname(e.target.value);}}/>
                    <InputEmail name="Email" action={(e) => {setEmail(e.target.value);}}/>
                    </div>
                </div>
                <div className="rightcolumnrow">
                    <div className="card-cyberpunk-wrapper">
                    <InputTxt name="Username" action={(e) => {setUsername(e.target.value);}}/>
                    <InputPsw name="Password" action={(e) => {setPassword(e.target.value);}}/>
                    <InputPsw name="password_retype"/>
                    </div>
                    <div className="card-cyberpunk">
                        <h1>Register</h1>
                            <Cyberbutton name="Submit" tags="J117" action={submit}/>
                    </div>
                </div>
        </div>
            <Footer/>
        </div>
    );
};

export default Register;