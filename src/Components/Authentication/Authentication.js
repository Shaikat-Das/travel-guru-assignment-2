import React, { useContext, useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const Authentication = () => {

    const [newUser, setNewUser]= useState(false);

    const [user, setUser] = useState({
      isSignedIn: false,
      newUser: false, 
      name: '',
      email: '',
      photo: '',
      password: ''
    })




    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
            const history= useHistory();
            const location= useLocation();
            const { from } = location.state || { from: { pathname: "/" } };
        if(firebase.apps.length ===0){
            firebase.initializeApp(firebaseConfig);
        }
        const handleGoogleSignIn = () => {

            const googleProvider = new firebase.auth.GoogleAuthProvider();
            
            firebase.auth().signInWithPopup(googleProvider)
            .then(function(result) {
                const user = result.user;
                console.log (user);
                const {displayName, email} = result.user;
                const signedInUser = {
                    name: displayName, 
                    email: email,
                    isSignedIn: true,
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
              })
              .catch(function(error) {
               const errorMessage = error.message;
               console.log(error);            
              });
        }

        const provider = new firebase.auth.FacebookAuthProvider();
        const handleFbSignIn = () =>{
            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
              });
        }






















                const handleSignOut = () =>{

                    firebase.auth().signOut()
                    .then (result => {
                    const signedOutUser = {
                        isSignedIn: false,
                        name: '', 
                        email: '',
                        photo: '',
                        error: '',
                        success: false
                        }
                    setUser(signedOutUser);
            
                    })
                    .catch (error =>{
                    console.log(error);
                    })
                }


        const handleBlur = (e) => {
            let isFormValid = true; 
            if(e.target.name === 'email'){
                isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
                
            }
            if(e.target.name === 'password'){
                isFormValid = /^[A-Za-z]\w{7,14}$/.test(e.target.password)
            }
            if(isFormValid){
                const newUserInfo = {...user}
                newUserInfo[e.target.name] = e.target.value;
                setUser(newUserInfo);

            }

        }

        const handleSubmit = (e) => {
            if (newUser && user.name && user.password){
                firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then( res =>{
                  const newUserInfo = {...user};
                  newUserInfo.error= '';
                  newUserInfo.success = true;
                  setUser(newUserInfo);
                })
                .catch(function(error) {
                    const newUserInfo = {...user};
                    newUserInfo.error= error.message;
                    newUserInfo.success = false;
                   setUser(newUserInfo);
                  });
            }
            if (!newUser && user.email && user.password){
                firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then (res =>{
                    const newUserInfo = {...user};
                  newUserInfo.error= '';
                  newUserInfo.success = true;
                  setUser(newUserInfo);

                })
                
                .catch(function(error) {
                    const newUserInfo = {...user};
                    newUserInfo.error= error.message;
                    newUserInfo.success = false;
                   setUser(newUserInfo);
                  });
            }
            e.preventDefault();
        }

    return (
        <div className="col-md-6 col-md-offset-3">
            <h4>Registration here to enter into the booking window</h4>
            {/* <p>Name: {user.name}</p>
            <p>e mail: {user.email}</p>
            <p>password: {user.password}</p> */}
            <br/><br/>

        <Form onSubmit={handleSubmit}>

        <input type="checkbox" onChange={() => setNewUser(!newUser)} name=" newUser" id=""/>
        <label htmlFor="newUser">New User Sign Up</label>
            <br/><br/>
            
        {newUser && <input type="text" name="name" onBlur={handleBlur}  placeholder="Give Your name here" required/>}
        <br/>  <br/>
        {newUser && <input type="text" name="address" onBlur={handleBlur} placeholder="Give Your Address here" required/>}
           
        <br/><br/>
        <input type="text" name="email" onBlur={handleBlur} name="email" placeholder="Give Your e-mail here" required/>
        <br/><br/>
        <input type="password" name="password" onBlur={handleBlur} name="password" placeholder="Put your password here" required/>
        <br/><br/>
        <input type="submit" className="btn btn-success" value="Submit"/>
      
        <br/><br/>
        <button className="btn btn-success" type="submit" onClick= {handleGoogleSignIn}
               value="Submit" > Sign In using Google</button>
        <br/><br/>
        <button className="btn btn-success" type="submit" onClick= {handleFbSignIn}
               value="Submit" > Sign In using Facebook</button>
            </Form>
            <p style={{color:'red'}}>{user.error}</p> 
            {user.success && <p style={{color:'green'}}>User {newUser ? 'created' : 'logged In'} successfully</p>}
        </div>
    );
};

export default Authentication;