import React, { Component } from 'react'
export default class My_sales extends Component {
  render() {
    return (
      <div>
  <div className="row">
    <div className="col-md-12 grid-margin transparent">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-4 stretch-card transparent">
              <input type="text" className="form-control p-2" name="tags" id="tags" defaultValue="Arvind" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="popover-static-demo">                   
                <div className="popover bs-popover-bottom bs-popover-bottom-demo popover-info">
                  <div className="arrow" />
                  <h3 className="popover-header">Mobiles</h3>
                  <div className="popover-body">
                    <p>Total Count  :  12</p><br />
                    <p>Total Value  :  456</p>
                  </div>
                </div>
                <div className="popover bs-popover-bottom bs-popover-bottom-demo popover-warning">
                  <div className="arrow" />
                  <h3 className="popover-header">Accessories</h3>
                  <div className="popover-body">
                    <p>Total Count  :  12</p><br />
                    <p>Total Value  :  456</p>
                  </div>
                </div>
                <div className="popover bs-popover-bottom bs-popover-bottom-demo popover-primary">
                  <div className="arrow" />
                  <h3 className="popover-header">Overall</h3>
                  <div className="popover-body">
                    <p>Total Count  :  12</p><br />
                    <p>Total Value  :  456</p>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12 grid-margin transparent">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-4 stretch-card transparent">
              <input type="text" className="form-control p-2" placeholder="Filter By Brands" defaultValue />
            </div>
            <div className="col-md-6 mb-4 justify-content-end stretch-card transparent ">
              <nav>
                <ul className="pagination flex-wrap">
                  <li className="page-item "><a className="page-link" href="#">2024</a></li>
                  <li className="page-item active"><a className="page-link" href="#">March</a></li>
                  <li className="page-item"><a className="page-link" href="#">This Week</a></li>
                  <li className="page-item"><a className="page-link" href="#">Today</a></li>
                </ul>
              </nav>
            </div><div className="row">
              <div className="col-md-6 mb-4 stretch-card transparent">
                <h6>Showing Sales Data (ARVIND)</h6>
              </div>
              <div className="col-md-6 mb-4 justify-content-end stretch-card transparent ">
                <button type="button" className="btn btn-primary float-end">Export to Excel</button>
              </div>
              <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Brand</th>
                              <th>Total Value</th>
                              <th>Total Count</th>
                              <th>See more</th>
                            </tr>
                          </thead>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
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
