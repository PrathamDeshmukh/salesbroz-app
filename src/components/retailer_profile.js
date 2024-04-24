import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const RetailerProfilePage = () => {
    const navigate = useNavigate();
 
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [account_holder_name, setAccount_holder_name] = useState("");
  const [account_no, setAccountNo] = useState("");
  const [error, setError] = useState("");
  const [profileCompleted, setProfileCompleted] = useState(false);

  useEffect(() => {
    const isProfileComplete =
      fname && lname && email && address && account_holder_name && account_no;
    setProfileCompleted(isProfileComplete);
  }, [fname, lname, email, address, account_holder_name, account_no]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!profileCompleted) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [profileCompleted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost/salesbroz_react_app/complete_profile.php", {
        fname:fname,
        lname:lname,
        email:email,
        address:address,
        account_holder_name:account_holder_name,
        account_no:account_no,
      });
      if (response.data.success) {
        // Profile updated successfully, redirect to dashboard
       
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
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
                        value={fname}
                        onChange={(e) => setFname(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Last Name:</label>
                        <input type="text" name="lname" className="form-control form-control-sm" 
                         value={lname}
                         onChange={(e) => setLname(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Email:</label>
                        <input type="email" name="email" className="form-control form-control-sm"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Address:</label>
                        <input type="text" name="address" className="form-control form-control-sm"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}/>
                      </div>
                    </div>
                  </div>
                  <h3 className="card-description"> Bank Details</h3>
                  <div className="row">
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
                  </div>
                  <button type="submit" disabled={!profileCompleted} className=" btn btn-primary ">
                    Save</button>
                </form><br></br>
                {!profileCompleted && (
        <p>Please complete all fields to save your profile.</p>
      )}
              </div>
            </div>
          </div> </div>
      </div>
    </div>
  </div>
</div>

);
};

export default RetailerProfilePage;