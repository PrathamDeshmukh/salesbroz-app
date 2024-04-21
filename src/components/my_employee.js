import React, { Component } from 'react'
export default class My_employee extends Component {
  render() {
    return (
       <div className="row">
  <div className="col-md-12 grid-margin transparent">
    <div className="row">
      <div className="col-md-6 mb-4  transparent">
        <h2 className="font-weight-bold">All Employees</h2>
      </div>
      <div className="col-md-6 mb-4  transparent">
       
        <a className="btn btn-primary float-end" href="<?php echo base_url();?>add_employee">Add Employee</a>
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
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Password</th>
                  <th>Age</th>
                  <th>Adhar Number</th>
                  <th>Address</th>
                  <th>Sale <br />Permission</th>
                  <th>Purchases <br /> Permission</th>
                  <th>Create At</th>
                  <th>Update At</th>
                  <th>Sale Action</th>
                  <th>Purchase Action</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>01</td>
                  <td>Ajay</td>
                  <td>1234567890</td>
                  <td>123</td>
                  <td>23</td>
                  <td>565654543434</td>
                  <td>yes</td>
                  <td>yes</td>
                  <td>25/2/2024</td>
                  <td>25/2/2024</td>
                  <td><a className="btn btn-primary float-end" href="#">
                      Allow Sale Permission</a><a>
                    </a></td>
                  <td><a className="btn btn-primary float-end" href="#">Purchase Allow</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <nav>
              <ul className="pagination flex-wrap">
                <li className="page-item"><a className="page-link" href="#"><i className="ti-angle-left" /></a></li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#"><i className="ti-angle-right" /></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div></div>

          
       

    
        

    );
  }
}
