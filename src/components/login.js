import { response } from "express";
import { useState, useEffect} from "react";


export default function Login() {
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  useEffect(() =>{
    setTimeout(function(){
      setMsg("");

    },5000)

  }, [msg]);

  const handleInputChange = (e, type) => {
    switch(type){
      case "phone":
        setError("");
        setPhone(e.target.value);
        if(e.target.value === ""){
          setError("Please Enter Phone")
        }
        break;
      case "username":
        setError("");
        setUsername(e.target.value);
        if(e.target.value === ""){
          setError("Please Enter Username")
        }
        break;

      case "password":
        setError("");
        setPassword(e.target.value);
        if(e.target.value === ""){
          setError("Please Enter Password")
        }
        break;
      default:
         }
  }
  function loginSubmit(){
    if(phone !== "" && username !== "" && password !== ""){
      var url = "http://localhost/salesbroz_react_app/login.php";
      var header={
        "Accept": "application/json",
        "Content-type": "application/json"
      };
      var Data = {
        phone : phone,
        username : username,
        password : password,

      };
      fetch(url, {
        method: "POST",
        header: header,
        body: JSON.stringify(Data)

      }).then((response) =>response.json())
      .then((response) =>{
        setMsg(response[0].result)
      }).catch((err) =>{
        setError(err);
        console.log(err);
      })
    }
    else{
      setError ("All Field are required!");

    }
  }


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
        <p>{
          error !== "" ?
            <div className="error"><b>{error}</b></div>:
            <div className="success"><b>{msg}</b></div>
            }
              
        </p>
        <h6 className="font-weight-light">Login to continue.</h6>
        <form action="<?php echo base_url('welcome/adminlogin'); ?>" method="post" className="pt-3">
          <div className="form-group">
            <input type="text" name="phone" className="form-control form-control-lg" id="exampleInputEmail1"  value={phone}
            onChange={(e) => handleInputChange(e, "phone")} placeholder="Contact Number" required />
          </div>
          <div className="form-group">
            <input type="text" name="username" className="form-control form-control-lg" id="exampleInputEmail1" value={username} 
             onChange={(e) => handleInputChange(e, "username")} placeholder="Username" required />
          </div>
          <div className="form-group">
            <input type="password" name="password" className="form-control form-control-lg" id="exampleInputPassword1" value={password} 
             onChange={(e) => handleInputChange(e, "password")} placeholder="Password" required />
          </div>
          <div className="mt-3 d-grid gap-2">
            <button type="submit" onClick={loginSubmit} className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">Log In</button>
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

    )
  
}
