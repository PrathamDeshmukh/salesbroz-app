import React from 'react'

export default function Retailer_profile() {
  return (
    <div>
  <div className="row">
    <div className="col-md-12 grid-margin">
      <div className="row">
        <div className="col-12 col-xl-12 mb-4 mb-xl-0">
          <div id="product-section">
            <div className="card">
              <div className="card-body">
                <form className="form-sample" action="<?php echo base_url() ?>Welcome/add_invoice" method="post" encType="multipart/form-data">
                  <h3 className="card-description"> Personal info</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">First Name:</label>
                        <input type="text" name="fname" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Last Name:</label>
                        <input type="text" name="lname" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Email:</label>
                        <input type="text" name="email" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Address:</label>
                        <input type="email" name="address" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                  </div>
                  <h3 className="card-description"> Bank Details</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Account Holder Name:</label>
                        <input type="text" name="account_holder_name" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Account No:</label>
                        <input type="text" name="account_no" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" id="product-btn" className="submit-button btn btn-primary ">Purchase Invoice Setting</button>
                </form>
              </div>
            </div>
          </div> </div>
      </div>
    </div>
  </div>
</div>

  )
}
