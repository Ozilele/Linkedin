import React, { useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import { login } from './features/userSlice';

const Login = () => {

  let uid = '';
  let user = null;
  const [inputs, setInputs] = useState({
    name: '',
    pic_Url: '',
    email: '',
    password: ''
  });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value // selected input change
      }
    });
  }

  const handleLoginForm = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, inputs.email, inputs.password)
    .then((userAuth) => {
      const user = userAuth.user;
      dispatch(login({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
        photoUrl: user.photoURL,
      }));
    })
    .catch(err => {
      console.log(err.code, err.message);
      alert(err.message);
    }) 
  }

  const handleRegister = async (e) => {
    if(!inputs.name) {
      return alert('You need to enter your full name to register');
    }
    await createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
    .then((userCredential) => {
      user = userCredential.user;
      updateProfile(user, {
        displayName: inputs.name,
        photoURL: inputs.pic_Url,
      });
      // user.displayName = inputs.name;
      // user.photoURL = inputs.pic_Url;
      console.log(user);
      uid = user.uid;
    })
    .then(() => {
      dispatch(login({
        email: user.email,
        uid: user.uid,
        displayName: inputs.name,
        photoUrl: inputs.pic_Url
      }));
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMsg = err.message;
      console.log(errorCode, errorMsg);
      alert(err.message);
    });
  }

  return (
    <div className="login">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/LinkedIn_2021.svg" alt="logo__welcome" className="login__banner"></img>

      <form className="login__form" onSubmit={handleLoginForm}>
        <input 
          value={inputs.name} 
          onChange={handleInput} 
          type="text" 
          placeholder="Full Name(required if registering)" 
          name="name" 
        />
        <input 
          value={inputs.pic_Url} 
          onChange={handleInput} 
          type="text" 
          placeholder="Profile pic URL (optional)" 
          name="pic_Url" 
        />
        <input 
          value={inputs.email} 
          onChange={handleInput} 
          type="email" 
          placeholder="Email" 
          name="email"
        />
        <input 
          value={inputs.password} 
          onChange={handleInput} 
          type="password" 
          placeholder="Password" 
          name="password" 
        />
        <button onClick={handleLoginForm} type="submit" className="sign__btn">Sign in</button>
      </form>
      <div className="additional__section">
        <p>Not a member?</p>
        <span onClick={handleRegister} className="link">Register now</span>
      </div>
    </div>
  )
}

export default Login;
