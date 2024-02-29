import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import './Signup.css'; // Import your external CSS file

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = UserAuth();
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
    return (
        <div className="container">
          <img
            className="image"
            src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
            alt='/'
          />
          <div className="overlay"></div>
          <div className='form-container'>
          <div className='form-wrapper'>
            <div className='form-content'>
              <h1 className='title'>Sign Up</h1>
              <form onSubmit={handleSubmit} className='form'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='input'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='input'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                <button className='button'>Sign Up</button>
                <div className='checkbox-container'>
                  <p>
                    <input type='checkbox' className='mr-2' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='link-container'>
                  <span className='link'>
                    Already subscribed to Netflix?
                  </span>{' '}
                  <Link to='/login' className='link'>
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Signup;
