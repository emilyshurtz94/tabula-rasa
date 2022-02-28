import React, { useState } from 'react';
import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

const LoginForm = () => {
  const [loginFormData, setLoginFormData] = useState({ username: '', password: '' });
const [login, {error,data}]= useMutation(LOGIN_USER);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const {data} = await login(loginFormData);

      Auth.login(data.login.token);
      if(data.login?.token){
        window.location.href='/user'
      }
    } catch (e){
      console.error(e)
    }

    setLoginFormData({
      username: '',
      password: '',
    });
  };

  return (
    <>
  <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Username" id="username" type="text" className="validate" value={loginFormData.username} onChange={handleChange} name='username'></input>
          <label htmlFor="username">Username</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" value={loginFormData.password} onChange={handleChange} name='password'></input>
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div>
      <a className="waves-effect waves-light btn-small" onClick={handleFormSubmit}>login</a>
      </div>
    </form>
  </div>
    </>
  );
};

export default LoginForm;
