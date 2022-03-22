import React, { useState } from 'react';
import './form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const { firstname, lastname, email, password } = formData;

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
  };

  return (
    <div className='container'>
      <form onChange={handleOnChange} onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='firstname'>First name</label>
          <input type='text' name='firstname' defaultValue={firstname} />
        </div>
        <div className='form-group'>
          <label htmlFor='lastname'>Last name</label>
          <input type='text' name='lastname' defaultValue={lastname} />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' defaultValue={email} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' defaultValue={password} />
        </div>
        <div className='form-group'>
          <input type='submit' value='Login' />
        </div>
      </form>
    </div>
  );
};

export default Form;
