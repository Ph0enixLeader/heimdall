import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useCookies } from "react-cookie";
import Axios from 'axios';

import Footer from "../components/Footer";
import Header from "../components/Header";
import Cyberbutton from "../components/cyberpunk/Cyber-buttons";

function Home (){

    const [loginStatus, setLoginStatus] = useState("");
    const history = useHistory();
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    function logout(){
      removeCookie();
      console.log("remove cookie");
    }

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/api/login").then((response) => {
          if (response.data.loggedIn === true) {
            setLoginStatus(response.data.user[0].username);
          }else {
            history.push("/");
          };
        });
      });

    return(
        <div className="Home">
            <Header/>
                <div className="row">
                    <div className="card-cyberpunk">
                        <div style={{float:"right"}}>
                        <Cyberbutton name="logout" tags="J117" action={logout}/>
                        </div>
                        <h1 >Welcome to Heimdall</h1>
                        <h1>{loginStatus}</h1>
                    </div>
                <div className="card-cyberpunk-wrapper">
                <h1 >Home</h1>
                <h1 >Home</h1>
                <h1 >Home</h1>
                <h1 >Home</h1>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;