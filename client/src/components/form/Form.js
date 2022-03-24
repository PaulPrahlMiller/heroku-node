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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log(data);
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
