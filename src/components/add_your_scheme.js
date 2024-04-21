import React, { Component } from 'react'

export default class Add_your_scheme extends Component {
  render() {
    return (
      <div>
  <div className="row">
    <div className="col-md-12 grid-margin transparent">
      <div className="card ">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-4 stretch-card transparent">
              <button type="button" className="btn btn-primary ">Add New Scheme</button>
            </div>
            <div className="col-md-6 mb-4 stretch-card transparent">
              <input type="text" className="form-control p-2" placeholder="Search Brand" defaultValue />  
            </div>
            <div className="col-md-6 mb-4  stretch-card transparent ">
              <nav>
                <ul className="pagination flex-wrap">
                  <li className="page-item active"><a className="page-link" href="#">2024</a></li>
                  <li className="page-item"><a className="page-link" href="#">March</a></li>
                  <li className="page-item"><a className="page-link" href="#">This Week</a></li>
                  <li className="page-item"><a className="page-link" href="#">Today</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-md-6 mb-4 justify-content-end stretch-card transparent">
              <input type="date" id="date" />  
            </div>
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <br /><table className="table table-striped table-borderless">
                      <thead>
                        <tr>
                          <th>Scheme Name</th>
                          <th>Brand</th>
                          <th>Inactive Type</th>
                          <th>Target Type</th>
                          <th>payout Type</th>
                          <th>Period From</th>
                          <th>Perid To</th>
                          <th>View Products</th>
                        </tr>
                      </thead>
                      <tbody>
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
      </div>
    </div>
  </div>
</div>

    )
  }
}
