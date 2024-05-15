import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { phone, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost/salesbroz_react_app/signup.php', { phone, password });
      if (response.data.status === 'success') {
        alert('Signup successful, please login');
    
        navigate("/login");
      } else {
        setError(response.data.message || 'There was an error signing up');
      }
    } catch (error) {
      console.error('There was an error signing up!', error);
      setError('There was an error signing up, please try again later');
    }
  };



    return (
<div className="container-scroller">
  <div className="container-fluid page-body-wrapper full-page-wrapper">
    <div className="content-wrapper d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-4 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 px-sm-5">
            <div className="brand-logo">
              <h1><b>SalesBroz..</b></h1>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
            <form  onSubmit={handleSubmit} className="pt-3">
             
              <div className="form-group">
                <input type="text" name="phone" className="form-control form-control-lg"  value={formData.phone} onChange={handleChange} placeholder="Contact Number" required />
              </div>
              <div className="form-group">
                <input type="password" name="password" className="form-control form-control-lg" value={formData.password} onChange={handleChange} placeholder="Password" required />
              </div>
              <div className="form-group">
                <input type="password" name="confirmPassword" className="form-control form-control-lg"  value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
              </div>
              <div className="mb-4">
                <div className="form-check">
                  <label className="form-check-label text-muted">
                    <input type="checkbox" className="form-check-input" />
                    I agree to all Terms &amp; Conditions
                  </label>
                </div>
              </div>
           
              <div className="mt-3 d-grid gap-2">
                <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN UP</button>
              </div>
              <div className="text-center mt-4 font-weight-light">
                Already have an account?  <Link to="/login"  className="text-primary">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* content-wrapper ends */}
  </div>
  {/* page-body-wrapper ends */}
</div>
 );
};

export default Signup;