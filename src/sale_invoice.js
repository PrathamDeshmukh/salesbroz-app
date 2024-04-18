import React, { Component } from 'react'
export default class sale_invoice extends Component {
  render() {
    return (
      <div>
  <div className="row">
    <div className="col-md-12 grid-margin transparent">
      <div className="row">
        <div className="col-md-5 mb-4  transparent">
          <h2 className="font-weight-bold">All Sale Invoices</h2>
        </div>
        <div className="col-md-7 mb-2 ml-2 transparent">
          <div className="row">
            <div className="col-md-6 mb-4  stretch-card transparent">
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
      <div className="card ">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-4 stretch-card transparent">
              <input type="text" className="form-control p-2" placeholder="Search invoice by Number,Customer and more" defaultValue />
            </div>
            <div className="col-md-3 mb-4 stretch-card transparent">
              <button type="button" className="btn btn-link btn-fw">Pending Payment Invoices</button>
            </div>
            <div className="col-md-3 mb-4 stretch-card transparent">
              {/* <button type="button" class="btn btn-link btn-fw">+ New Invoices</button> */}
              <a className="btn btn-link btn-fw" href="<?php echo base_url();?>invoice_setting">+ New Invoices</a>
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
                  <th>Invoice No.</th>
                  <th>paid</th>
                  <th>Customer<br />Name</th>
                  <th>Customer<br />Phone</th>
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
                  <td>Yes</td>
                  <td>Ajay</td>
                  <td>1234567898</td>
                  <td> 30000</td>
                  <td>2000</td>
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



    );
}
}