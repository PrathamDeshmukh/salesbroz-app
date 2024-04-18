import React, { Component } from 'react'
export default class invoice_setting extends Component {
  render() {
    return (
      <div>
  <div className="row">
    <div className="col-md-12 grid-margin">
      <div className="row">
        <div className="col-12 col-xl-8 mb-4 mb-xl-0">
          <h2 className="font-weight-bold">Invoice Setting</h2><br />
          <button type=" button "hidden  id="product-btn" className="btn btn-primary ">Purchase Invoice Setting</button>
          <button type="button" hidden id="sale-btn" className="btn btn-primary active ">Sales Invoice Setting</button>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12 grid-margin">
      <div className="row">
        <div className="col-12 col-xl-12 mb-4 mb-xl-0">
          <div id="product-section">
            {/* Product table will be loaded here */}
            <div className="card">
              <div className="card-body">
                <form className="form-sample" action="<?php echo base_url() ?>Welcome/add_invoice" method="post" encType="multipart/form-data">
                  <h3 className="card-description"> Personal info</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Series No:</label>
                        <input type="text" name="series_no" className="form-control form-control-sm" id="exampleInputUsername1" />
                        <p className="col-form-label"> is your latest invoice number as per your invoice records.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Challan Serial:</label>
                        <input type="text" name="challan_no" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Business Phone Number:</label>
                        <input type="text" name="phone" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Business Email:</label>
                        <input type="email" name="email" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Your terms and condition. This will be visible on all invoices you generate</label>
                        <input type="text" name="terms_condition" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group row">
                        <div className="col-sm-4">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                              Send SMS invoice copy to Customer
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-4">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                              Send SMS invoice copy to self
                            </label>
                          </div>
                        </div>
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
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">IFSC Code:</label>
                        <input type="text" name="ifsc_code" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Bank Name:</label>
                        <input type="text" name="Bank_name" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Branch Name:</label>
                        <input type="text" name="Branch_name" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">UIP Id:</label>
                        <input type="text" name="upi_id" className="form-control form-control-sm" id="exampleInputUsername1" />
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
  <div className="row">
    <div className="col-md-12 grid-margin">
      <div className="row">
        <div className="col-12 col-xl-12 mb-4 mb-xl-0">
          <div id="sale-section" style={{display: 'none'}}>
            {/* Sale table will be loaded here */}
            <div className="card">
              <div className="card-body">
                <form className="form-sample" action="<?php echo base_url('welcome/addinvoice') ?>" method="post" encType="multipart/form-data">
                  <h3 className="card-description"> Personal info</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Series No:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" />
                        <p className="col-form-label"> is your latest invoice number as per your invoice records.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Challan Serial:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Business Phone Number:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Business Email:</label>
                        <input type="email" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Your terms and condition. This will be visible on all invoices you generate</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group row">
                        <div className="col-sm-4">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                              Send SMS invoice copy to Customer
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-4">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                              Send SMS invoice copy to self
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="card-description"> Bank Details</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Account Holder Name:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Account No:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">IFSC Code:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Bank Name:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Branch Name:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">UIP Id:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>


    );
}
}