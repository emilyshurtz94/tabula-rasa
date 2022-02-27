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

    // check if form has everything (as per react-bootstrap docs)
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    try {
      // const response = await createUser(userFormData);

      // if (!response.ok) {
      //   throw new Error('something went wrong!');
      // }

      // const { token, user } = await response.json();
      // console.log(user);
      // Auth.login(token);
      const {data} = await addUser({ variables: {...signUpData}});
      Auth.login(data.addUser.token)

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
          <input placeholder="Placeholder" id="username" type="text" className="validate" value={signUpData.username}></input>
          <label for="username">Username</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" value={signUpData.password}></input>
          <label for="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" value={signUpData.email}></input>
          <label for="email">Email</label>
        </div>
      </div>
      <div>
      <a className="waves-effect waves-light btn-small">Submit</a>
      </div>
    </form>
  </div>
        
    </>
  );
};

export default SignupForm;
