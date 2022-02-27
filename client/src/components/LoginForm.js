import React, { useState } from 'react';
import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

const LoginForm = () => {
  const [loginFormData, setLoginFormData] = useState({ username: '', password: '' });
const [login, {error,data}]= useMutation(LOGIN_USER);

  // const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const {response} = await login(loginFormData);

      Auth.login(data.login.token);
    } catch (e){
      console.error(e)
    }

    setLoginFormData({
      username: '',
      password: '',
    });
  };

    //   if (!response.ok) {
    //     throw new Error('something went wrong!');
    //   }

    //   const { token, user } = await response.json();
    //   console.log(user);
    //   Auth.login(token);
    // } catch (err) {
    //   console.error(err);
    //   setShowAlert(true);
  return (
    <>
  <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Username" id="username" type="text" className="validate" value={loginFormData.username} onChange={handleChange}></input>
          <label htmlFor="username">Username</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" value={loginFormData.password} onChange={handleChange}></input>
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div>
      <a className="waves-effect waves-light btn-small">login</a>
      </div>
    </form>
  </div>
    </>
  );
};

export default LoginForm;
