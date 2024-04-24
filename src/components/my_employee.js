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
       
      
        <button type="button" className="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
           Add Employee
        </button>

     {/* Modal */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog  ">
    <div className="modal-content">
      <div className="modal-header">
        <h3 className="card-description"> Add New Employee info</h3>
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
                <label htmlFor="exampleInputUsername1">Adhar Number:</label>
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
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Allow sales Permissions:</label>
                <select name="sale_permission" className="form-control form-control-sm" id="exampleFormControlSelect1">
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Allow Purchase Permissions:</label>
                <select name="purchase_permission" className="form-control form-control-sm" id="exampleFormControlSelect2">
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
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
