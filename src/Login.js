import React from 'react';
import "./Login.css";
import {Link ,useHistory} from "react-router-dom";
import { useState } from 'react';
import {auth} from "./firebase";

function Login() {
const history = useHistory();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
    e.preventDefault();


    auth
    .signInWithEmailAndPassword(email,password)
    .then(auth => {
        history.push('/')
    })
    .catch(error => alert(error.message))

}
const register = e => {
    e.preventDefault();

    auth
    .createUserWithEmailAndPassword(email, password)
    //it sucessfully created a new user with email and password
    .then((auth) => {
        console.log(auth);
        if (auth) {
            history.push('/')
        }
    })
    .catch(error => alert(error.message))
    //do some fancy firebase register shit
}



    return (
        
        <div className="login">
            <Link to ='/'>
            
            <img className="login_logo" src="https://th.bing.com/th/id/OIP.vwY-F9xvepGwJxSGNIGsgwHaEo?w=282&h=180&c=7&o=5&dpr=1.25&pid=1.7"/>
            </Link>
            <div className="login_container">
                <h1>sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type ="text"  value={email} 
                    onChange={e => setEmail(e.target.value)}/>
                    <h5>password</h5>
                    <input type ="password" value={password}
                     onChange={e => setPassword(e.target.value)} />  
                     
                    <button onClick={signIn}
                    
                    button  className="login_signInButton">Sign In</button>  
                             </form>
                             <p>
                                 By signing-in you agree to AMAZON FAKE CLONE Conditions of use & sale,Please see your policy notice,our cookies notice and your Interest-Based Ads Notice.
                             </p>
                  <button onClick={register}
                  button className="login_register">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
