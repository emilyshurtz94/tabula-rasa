import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [signUpData, setSignUpData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();


    try {

      const {data} = await addUser({ variables: {...signUpData}});
      console.log(data)
      Auth.login(data.signUp.token)
      if(data.signUp?.token){
        window.location.href='/settings'
      }
    } catch (e) {
      console.error(e);
    }

    setSignUpData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Placeholder" id="username" type="text" className="validate" value={signUpData.username} onChange ={handleChange} name="username"></input>
          <label for="username">Username</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" value={signUpData.password} onChange ={handleChange} name="password"></input>
          <label for="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" value={signUpData.email} onChange ={handleChange} name="email"></input>
          <label for="email">Email</label>
        </div>
      </div>
      <div>
      <a className="waves-effect waves-light btn-small" onClick={handleFormSubmit} >Submit</a>
      </div>
    </form>
  </div>
        
    </>
  );
};

export default SignupForm;
