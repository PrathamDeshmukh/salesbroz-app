import React, { Component } from 'react'
export default class sidebar extends Component {
  render() {
    return (
     <div>
  <div className="row">
    <div className="col-md-12 grid-margin">
      <div className="row">
        <div className="col-12 col-xl-8 mb-4 mb-xl-0">
          <h3 className="font-weight-bold">Welcome </h3>
          <h6 className="font-weight-normal mb-0">All systems are running smoothly! You have <span className="text-primary">3
              unread alerts!</span></h6>
        </div>
        <div className="col-12 col-xl-4">
          <div className="justify-content-end d-flex">
            <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
              <button className="btn btn-sm btn-light bg-white dropdown-toggle" type="button" id="dropdownMenuDate2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <i className="mdi mdi-calendar" /> Today (10 Jan 2021)
              </button>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate2">
                <a className="dropdown-item" href="#">January - March</a>
                <a className="dropdown-item" href="#">March - June</a>
                <a className="dropdown-item" href="#">June - August</a>
                <a className="dropdown-item" href="#">August - November</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12 grid-margin transparent">
      <div className="row">
        <div className="col-md-6 mb-4 stretch-card transparent">
          <div className="card card-tale">
            <div className="card-body">
              <p className="mb-4">Total Purchase</p>
              <p className="fs-30 mb-2">4006</p>
              <p>10.00% (30 days)</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4 stretch-card transparent">
          <div className="card card-dark-blue">
            <div className="card-body">
              <p className="mb-4">Total Sales</p>
              <p className="fs-30 mb-2">61344</p>
              <p>22.00% (30 days)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
          <div className="card card-light-blue">
            <div className="card-body">
              <p className="mb-4">No Of Customer's</p>
              <p className="fs-30 mb-2">34040</p>
              <p>2.00% (30 days)</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 stretch-card transparent">
          <div className="card card-light-danger">
            <div className="card-body">
              <p className="mb-4">Number of Vendors</p>
              <p className="fs-30 mb-2">450</p>
              <p>0.22% (30 days)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <p className="card-title">My Purchase</p>
          <p className="font-weight-500">The total number of sessions within the date range. It is the period time a
            user is actively engaged with your website, page or app, etc</p>
          <div className="d-flex flex-wrap mb-5">
            <div className="me-5 mt-3">
              <p className="text-muted">Order value</p>
              <h3 className="text-primary fs-30 font-weight-medium">12.3k</h3>
            </div>
            <div className="me-5 mt-3">
              <p className="text-muted">Orders</p>
              <h3 className="text-primary fs-30 font-weight-medium">14k</h3>
            </div>
            <div className="me-5 mt-3">
              <p className="text-muted">Users</p>
              <h3 className="text-primary fs-30 font-weight-medium">71.56%</h3>
            </div>
            <div className="mt-3">
              <p className="text-muted">Downloads</p>
              <h3 className="text-primary fs-30 font-weight-medium">34040</h3>
            </div>
          </div>
          <canvas id="order-chart" />
        </div>
      </div>
    </div>
    <div className="col-md-6 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className="card-title">My Sales</p>
            <a href="#" className="text-info">View all</a>
          </div>
          <p className="font-weight-500">The total number of sessions within the date range. It is the period time a
            user is actively engaged with your website, page or app, etc</p>
          <div id="sales-chart-legend" className="chartjs-legend mt-4 mb-2" />
          <canvas id="sales-chart" />
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <p className="card-title">Advanced Table</p>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table id="example" className="display expandable-table" style={{width: '100%'}}>
                  <thead>
                    <tr>
                      <th>Quote#</th>
                      <th>Product</th>
                      <th>Business type</th>
                      <th>Policy holder</th>
                      <th>Premium</th>
                      <th>Status</th>
                      <th>Updated at</th>
                      <th />
                    </tr>
                  </thead>
                </table>
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
