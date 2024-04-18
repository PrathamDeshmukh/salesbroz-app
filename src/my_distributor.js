import React, { Component } from 'react'

export default class my_distributor extends Component {
  render() {
    return (
     <div>
  <div className="row">
    <div className="col-md-12 grid-margin transparent">
      <div className="row">
        <div className="col-md-6 mb-4  transparent">
          <h2 className="font-weight-bold">My Distributors</h2>
        </div>
        <div className="col-md-6 mb-4 justify-content-end stretch-card transparent">
          <button type="button" className="btn btn-primary ">Download</button>
        </div>
        <div className="col-md-7 mb-2 ml-2 transparent">
          <div className="row">                      
          </div>                 
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
              <button type="button" className="btn btn-primary ">Add Distributor</button>
            </div>
            <div className="col-md-6 mb-4 stretch-card transparent">
              <input type="text" className="form-control p-2" placeholder="Search user" defaultValue />  
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
                  <th>Name</th>
                  <th>Contact Number</th>
                  <th>Type</th>
                  <th>City</th>
                  <th>Brand</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ajay</td>
                  <td>1234567898</td>
                  <td>Customer</td>
                  <td>Itarsi</td>
                  <td>-</td>
                  <td><a href="#"><i className="fa fa-edit" />
                      <button className="btn btn-primary">Action</button>
                    </a></td>
                </tr>
              </tbody>
            </table><br />
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
}
