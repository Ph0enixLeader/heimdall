import React, { useState, useEffect } from "react";
import Axios from 'axios';

import Footer from "../components/Footer";
import Header from "../components/Header";
//import Cyberbutton from "../components/cyberpunk/Cyber-buttons";

function Home (){

    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/api/login").then((response) => {
          if (response.data.loggedIn === true) {
            setLoginStatus(response.data.user[0].username);
          }
        });
      }, []);

    return(
        <div className="Home">
            <Header/>
                <div className="row">
                    <div className="card-cyberpunk" >
                        <h1 >Welcome to Heimdall</h1>
                        <h1>{loginStatus}</h1>
                    </div>
                <div className="card-cyberpunk-wrapper">
                    <h1 >Home</h1>
    
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;