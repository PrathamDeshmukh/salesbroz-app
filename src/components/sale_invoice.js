import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sale_invoice() {

    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     getUsers();
    // }, []);

    // function getUsers() {
    //     axios.get('http://localhost/salesbroz_react_app/get_sale_invoices.php/').then(function(response) {
    //         console.log(response.data);
    //         setUsers(response.data);
    //     });
    // }
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


{/* 
              {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.date}</td>
              <td>{invoice.invoice_no}</td>
              
              <td>{invoice.c_paid}</td>
              <td>{invoice.c_name}</td>
              <td>{invoice.c_phone}</td>
              <td>{invoice.c_amount}</td>
              <td>{invoice.pending_amount}</td>
              <td>{invoice.pay_mode}</td>
              <td>
                <Link to={`/${invoice.id}`}>Edit Details</Link>
              </td>
              <td>
                <Link to={`/${invoice.id}`}>View Details</Link>
              </td>
            </tr>
          ))} */}








              
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

)
}
