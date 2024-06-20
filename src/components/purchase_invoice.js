

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


const Purchases_invoice = () => {





  const [invoices, setInvoices] = useState([]);
  const tableName = "purchase_invoice"; // Specify the table name here

  useEffect(() => {
    axios
      .post(`http://localhost/salesbroz_react_app/get_tableData.php`, {
        table: tableName,
      })
      .then((response) => {
        setInvoices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [tableName]);

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
                  <input
                    type="text"
                    className="form-control p-2"
                    name="tags"
                    id="tags"
                    defaultValue="Arvind"
                  />
                </div>
                <div className="col-md-2 mb-4 stretch-card transparent">
                  <button type="button" className="btn btn-primary float-end">
                    Filter
                  </button>
                </div>
                <div className="col-md-2 mb-4 stretch-card transparent">
                  <button type="button" className="btn btn-primary float-end">
                    Download
                  </button>
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
                  <input
                    type="text"
                    className="form-control p-2"
                    name="tags"
                    id="tags"
                    placeholder="Filter Here"
                    defaultValue
                  />
                </div>
                <div className="col-md-2 mb-4 stretch-card transparent">
                  <button type="button" className="btn btn-link btn-fw ">
                    Pending purchase{" "}
                  </button>
                </div>
                <div className="col-md-2 mb-4 transparent">
                  <Link to="/add_purchase_invoice"
                    type="button"
                    className="btn btn-link btn-fw "
                   
                  >
                    Add Purchase Invoice
                  </Link>
                 
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
                              <th>
                                Vendor
                                <br />
                                Name
                              </th>
                              <th>
                                Vendor
                                <br />
                                Phone
                              </th>
                              <th>Paid</th>
                              <th>Amount</th>
                              <th>
                                Pending
                                <br />
                                Amount
                              </th>
                              <th>
                                Payment
                                <br />
                                Mode
                              </th>
                              <th>Payments</th>
                              <th>Products</th>
                            </tr>
                          </thead>
                          <tbody>
                            {invoices.map((invoice) => (
                              <tr key={invoice.id}>
                                <td>{invoice.bill_date}</td>
                                <td>{invoice.bill_no}</td>
                                <td>{invoice.Vname}</td>
                                <td>{invoice.Vphone}</td>
                                <td>{invoice.paid_amount}</td>
                                <td>{invoice.total_amount}</td>
                                <td>{invoice.pending_amount}</td>
                                <td>{invoice.pay_mode}</td>
                                <td>
                                  <button className="btn btn-outline-primary">
                                    ViewUpdate
                                    <br />
                                    Payments
                                  </button>
                                </td>
                                <td>
                                  <button className="btn btn-outline-primary">
                                    View Products
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <nav>
                          <ul className="pagination flex-wrap">
                            <li className="page-item">
                              <a className="page-link" href="#">
                                <i className="ti-angle-left" />
                              </a>
                            </li>
                            <li className="page-item active">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                4
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                <i className="ti-angle-right" />
                              </a>
                            </li>
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
