import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const retailerId = localStorage.getItem('retailer_id');
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    address: '',
    email: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch current profile data if needed
    // Fetch current profile data
    axios.get(`http://localhost/salesbroz_react_app/get-profile.php?retailer_id=${retailerId}`)
      .then(response => {
        if (response.data.status === 'success') {
          setFormData(response.data.data);
        } else {
          console.error('No profile data found');
        }
      })
      .catch(error => console.error('There was an error fetching the profile!', error));
  }, [retailerId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/salesbroz_react_app/complete_profile.php', {
        retailer_id: retailerId,
        ...formData
      });
      if (response.data.status === 'success') {
        alert('Profile updated successfully');
        navigate("/");
      } else {
        alert('There was an error updating your profile');
      }
    } catch (error) {
      console.error('There was an error updating the profile!', error);
    }
  };

  return (
    <div>
  <div className="row">
    <div className="col-md-12 grid-margin">
      <div className="row">
        <div className="col-12 col-xl-12 mb-4 mb-xl-0">
          <div id="product-section">
            <div className="card">
              <div className="card-body">
                <form className="form-sample" onSubmit={handleSubmit}>
                  <h3 className="card-description"> Personal info</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">First Name:</label>
                        <input type="text" name="fname" className="form-control form-control-sm" 
                        value={formData.fname}
                        onChange={handleChange} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Last Name:</label>
                        <input type="text" name="lname" className="form-control form-control-sm" 
                        value={formData.lname}
                        onChange={handleChange}/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Email:</label>
                        <input type="email" name="email" className="form-control form-control-sm"
                          value={formData.email}
                          onChange={handleChange}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Address:</label>
                        <input type="text" name="address" className="form-control form-control-sm"
                          value={formData.address}
                          onChange={handleChange}/>
                      </div>
                    </div>
                  </div>
                  <h3 className="card-description"> Bank Details</h3>
                  {/* <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Account Holder Name:</label>
                        <input type="text" name="account_holder_name" className="form-control form-control-sm"
                         value={account_holder_name}
                         onChange={(e) => setAccount_holder_name(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Account No:</label>
                        <input type="text" name="account_no" className="form-control form-control-sm" 
                       value={account_no}
                       onChange={(e) => setAccountNo(e.target.value)} /> 
                      </div>
                    </div>
                  </div> */}
                  <button type="submit" className=" btn btn-primary ">
                    Save</button>
                </form><br></br>
              
              </div>
            </div>
          </div> </div>
      </div>
    </div>
  </div>
</div>

);
};

export default MyProfile;