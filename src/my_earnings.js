import React, { Component } from 'react'

export default class my_earnings extends Component {
  render() {
    return (
     <div>
  <div className="row">
    <div className="col-md-12 grid-margin transparent">
      <div className="card ">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12  stretch-card transparent">
              <div className="col-md-4  stretch-card transparent">
                <button className="btn info">Scheme Earnings</button>
              </div>
              <div className="col-md-4  stretch-card transparent">
                <button className="btn info">Brand Earnings</button>
              </div>
              <div className="col-md-4  stretch-card transparent">
                <button className="btn info">Product Earnings</button>
              </div>
            </div>
            <div className="col-md-6 mb-4 stretch-card transparent">
              <input type="text" className="form-control p-2" placeholder="Filter By Brands" defaultValue />
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
                          <th>Earnings</th>
                          <th>Active</th>
                        </tr>
                      </thead>
                      <tbody>
                      </tbody>
                    </table>
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
