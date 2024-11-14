import React from 'react';
import './Form.css';  
import JoinButton from '../Atoms/button/joinButton';

const Form = () => {
  return (
    <div className="form">
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <JoinButton />
      </form>
    </div>
  );
};

export default Form;

