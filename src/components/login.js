import React, { Component } from 'react'

export default class Login extends Component {
  render() {
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
        <form action="<?php echo base_url('welcome/adminlogin'); ?>" method="post" className="pt-3">
          <div className="form-group">
            <input type="text" name="phone" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Contact Number" required />
          </div>
          <div className="form-group">
            <input type="text" name="username" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" required />
          </div>
          <div className="form-group">
            <input type="password" name="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" required />
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

    )
  }
}
