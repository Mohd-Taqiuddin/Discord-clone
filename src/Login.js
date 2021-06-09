import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {
    // Google Login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">  
    <div className="login_logo">
        <img src="https://www.technipages.com/wp-content/uploads/2020/10/fix-discord-camera-not-working.png"
        alt="Discord logo" />
        <div className="signButton">
            <Button  onClick={signIn} >Sign In</Button>
        </div>
        
    </div>
    
</div>
  );
}

export default Login;
