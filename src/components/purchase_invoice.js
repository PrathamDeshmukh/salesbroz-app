import React, { useState } from 'react';

const Purchases_invoice = () => {
  const [activeBtn, setActiveBtn] = useState('first');
  
  const toggleTable = (btn) => {
    setActiveBtn(btn);
  };
    return (
       <div>
  <div className="row">
    <div className="col-md-12 grid-margin transparent">
      <div className="row">
        <div className="col-md-5 mb-4  transparent">
          <h2 className="font-weight-bold">All Purchase Invoices</h2>
        </div>
        <div className="col-md-7 mb-2  transparent">
          <div className="row">
            <div className="col-md-6 mb-4 stretch-card transparent">
              <input type="text" className="form-control p-2" name="tags" id="tags" defaultValue="Arvind" />
            </div>
            <div className="col-md-2 mb-4 stretch-card transparent">
              <button type="button" className="btn btn-primary float-end">Filter</button>
            </div>
            <div className="col-md-2 mb-4 stretch-card transparent">
              <button type="button" className="btn btn-primary float-end">Download</button>
            </div>
          </div>
          {/* <input  type="text" class="form-control" name="tags" id="tags" value="Arvind" />
          </div>
          <div class="col-md-2 mb-1  justify-content-end transparent">
            <button type="button" class="btn btn-primary float-end">Filter</button>
          </div>
          <div class="col-md-2 mb-1 justify-content-end transparent">
            <button type="button" class="btn btn-primary float-end">Download</button> */}
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12 grid-margin transparent">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8 mb-4 stretch-card transparent">
              <input type="text" className="form-control p-2" name="tags" id="tags" placeholder="Filter Here" defaultValue />
            </div>
            <div className="col-md-2 mb-4 stretch-card transparent">
              <button type="button" className="btn btn-primary float-end">Pending purchase </button>
            </div>
            <div className="col-md-2 mb-4 transparent">
          
              <button type="button" className="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
               Add Purchase Invoice
        </button>
         {/* Modal */}
     <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog  ">
    <div className="modal-content">
      <div className="modal-header">
        <h3 className="card-description"> Add New Stock</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">








     <div className="row">
  <div className="col-md-12 grid-margin">
    {/* Product table will be loaded here */}
    <div className="card">
      <div className="card-body">
        <form className="form-sample" >
         
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Employee Full Name:</label>
                <input type="text" name="e_name" className="form-control form-control-sm" id="exampleInputUsername1" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Contact Number:</label>
                <input type="text" name="e_phone" className="form-control form-control-sm" id="exampleInputUsername1" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Create Password:</label>
                <input type="password" name="password" className="form-control form-control-sm" id="exampleInputUsername1" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Confirm Password:</label>
                <input type="password" name="c_pass" className="form-control form-control-sm" id="exampleInputUsername1" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Age:</label>
                <input type="text" name="e_age" className="form-control form-control-sm" id="exampleInputUsername1" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Aadhar Number:</label>
                <input type="text" name="adhar_no" className="form-control form-control-sm" id="exampleInputUsername1" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Address:</label>
                <input type="text" name="e_address" className="form-control form-control-sm" id="exampleInputUsername1" />
              </div>
            </div>
            <div className="col-md-3 mb-4 stretch-card transparent">
              {/* <button type="button" class="btn btn-link btn-fw">+ New Purchase Invoices</button> */}
              <a className="btn btn-link btn-fw" href="<?php echo base_url();?>invoice_setting">+  New Purchase Invoices</a>
            </div>
          </div>
          <button type="submit" id="product-btn" className="submit-button btn btn-primary ">Add </button>
        </form>
      </div>
    </div>
  </div>
</div>




        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>





            </div>
          </div>
          
  <div className="row">
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-borderless">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Bill No.</th>
                  <th>Vendor<br />Name</th>
                  <th>Vendor<br />Phone</th>
                  <th>Paid</th>
                  <th>Amount</th>
                  <th>Pending<br />Amount</th>
                  <th>Payment<br />Mode</th>
                  <th>Payments</th>
                  <th>Products</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>02/02/2024</td>
                  <td>01</td>
                  <td>Ajay</td>
                  <td>9876543234</td>
                  <td>yes</td>
                  <td>70000</td>
                  <td>5000</td>
                  <td>Cash</td>
                  <td>
                    <button className="btn btn-outline-primary">ViewUpdate<br />Payments</button>
                  </td>
                  <td>
                    <button className="btn btn-outline-primary">View Products</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <nav>
              <ul className="pagination flex-wrap">
                <li className="page-item"><a className="page-link" href="#"><i className="ti-angle-left" /></a></li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#"><i className="ti-angle-right" /></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
 

</div>
</div>
</div>
</div>
</div>

);
};
export default Purchases_invoice;