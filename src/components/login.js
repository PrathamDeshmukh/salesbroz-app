import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/salesbroz_react_app/login.php', { phone, password });
      if (response.data.status === 'success') {
        localStorage.setItem('retailer_id', response.data.retailer_id);
        if (response.data.profile_status === 'complete') {
          navigate("/");
        } else {
          navigate("/My_Profile");
        }
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };


    return (
<div>
    <div className="container-scroller">
   <div className="container-fluid page-body-wrapper">
          
   <div className="row w-100 mx-0">
    <div className="col-lg-4 mx-auto">
      <div className="auth-form-light text-left py-5 px-4 px-sm-5">
        <div className="brand-logo">
          <h1><b>SalesBroz..</b></h1>
        </div>
       
        <h6 className="font-weight-light">Login to continue.</h6>
        <form onSubmit={handleSubmit}className="pt-3">
          <div className="form-group">
            <input type="text" name="phone" className="form-control form-control-lg" 
             value={phone} onChange={(e) => setPhone(e.target.value)} 
             placeholder="Contact Number" required />
          </div>
        
          <div className="form-group">
            <input type="password" name="password" className="form-control form-control-lg"  
            value={password} onChange={(e) => setPassword(e.target.value)}
             placeholder="Password" required />
          </div>
          <div className="mt-3 d-grid gap-2">
            <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">Log In</button>
          </div>
          <div className="my-2 d-flex justify-content-between align-items-center">
            <div className="form-check">
              <label className="form-check-label text-muted">
                <input type="checkbox" className="form-check-input" />
                Keep me signed in
              </label>
            </div>
            <a href="#" className="auth-link text-black">Forgot password?</a>
          </div>
          <div className="text-center mt-4 font-weight-light">
            Don't have an account? <a href="<?php base_url()?>signup" className="text-primary">Create</a>
          </div>
        </form>
      </div>
    </div>
    </div>
</div>
</div>
</div>
  );
};

export default Login;