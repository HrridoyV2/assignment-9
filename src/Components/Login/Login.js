import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../Logo.png';
import { UserContext } from '../../App';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';
import google from '../../Icon/google.png';
import fb from '../../Icon/fb.png'

const Login = () => {
    // 
    const [newUser, setNewUser] = useState(true)
    const [user, setUser] = useState({
        isSignedIn: false,
        firstName: "",
        lastsName: "",
        email: "",
        password: "",
        confirmPassword: "",
        photo: "",
        error: "",
        success: false
    })
    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || {from: { pathname: "/" } };
// 
    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
            handleResponse(res, true)
        })
    }
    
    
    
    const fbSignIn = () => {
        handleFbSignIn()
        .then(res => {
            handleResponse(res, true)
        })
    }
    
    const signOut = () => {
        handleSignOut()
        .then(res => {
            handleResponse(res, false);
        })
    }
    //
    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
          history.replace(from);
        }
    }
    let isEmailValid = false;
    let isPasswordValid = false;
    const handleBlur = (e) => {
        
        if(e.target.name === 'email'){
          
            isEmailValid = /\S+@\S+\.\S+/.test(e.target.value)
            if(!isEmailValid){
              user.error = "Invalid Email"
            }
        }
        if(e.target.name === 'password'){
          
            isPasswordValid = e.target.value.length >= 6 && /\d{1}/.test(e.target.value);
            if(isPasswordValid){
              user.error = "Password is Not Valid";
            }
            
        }
        let isConfirm = false;
        isConfirm = user.password === user.confirmPassword;
        if(!isConfirm){
          user.error = "Password did not Matched!"
        }
        
        if(isEmailValid && isPasswordValid && isConfirm){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if(newUser && user.email && user.password){
            createUserWithEmailAndPassword(user.firstName, user.lastName, user.email, user.password)
            .then(res => {
            handleResponse(res, true)
            })
        }
        else if(!newUser && user.email && user.password){
            signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
              setUser(res);
              setLoggedInUser(res);
              history.replace(from)
            })
        }
        e.preventDefault();

        
    }
    return (
        <div className='container'>
            <nav className='d-flex bg-dark'>
                <img src={logo} className='nav-logo'/>
                <Link className='nav ml-auto'>News</Link>
                <Link className='nav'>Blog</Link>
                <Link className='nav'>Destination</Link>
                <Link className='nav'>Contact</Link>
                <button onClick={signOut} className='btn btn-warning'>SignOut</button>
            </nav>
            <form onClick={handleSubmit} className='form'>
                <h5 className='ml-2'>Create an account</h5>

                {
                    newUser &&
                <input type="text" onBlur={handleBlur} name="firstName" placeholder='First Name' className='form-control' required/>
                }<br/>
                {
                    newUser && 
                    <input type="text" onBlur={handleBlur} name="lastName" placeholder='Last   Name' className='form-control' required/>
                }
                <br/>
                <input type="text" onBlur={handleBlur} name="email" placeholder='Username or Email' className='form-control' required/>
                <br/>
                <input type="password" onBlur={handleBlur} name="password" placeholder="Password" className='form-control' required/>
                <br/>
                {
                    !newUser &&
                <div className='d-flex'>
                <label className='form-form-check-label'>Remember me</label>
                <input type="checkbox" id="remember" className="form-check-input"/>
                
                <Link className="ml-auto text-warning">Forgot Password</Link>
                </div>
                }
                {
                    newUser &&
                    <input type="password" onBlur={handleBlur} name="confirmPassword" placeholder="Confirm Password" className='form-control' required/>
                    }
                <br/>
                <input type="submit" value={newUser ? "Create an account" : "Sign In"} className='btn btn-warning btn-block'/>
                <p className='text-center'>{newUser ? "Already have an account" : "New User"}? <Link className='text-warning' onClick={() => setNewUser(!newUser)}>{ !newUser
                 ? "creat an account" : "login"}</Link></p>
            </form>
            <p style={{color:'red'}}>{console.log(user.error)}</p>
            {/* {
                user.success && 
                <p style={{color:'green'}}>User { newUser ?  "created" : "logged in"} successfully</p>
            } */}
            <button className='logo' onClick={googleSignIn}><img src={google}/>Continue with Google</button>

            <button className='logo' onClick={fbSignIn}><img src={fb}/>Continue with Facebook</button>
  
        </div>
    );
};

export default Login;