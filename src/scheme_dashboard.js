import React, { Component } from 'react'

export default class scheme_dashboard extends Component {
  render() {
    return (
      <div>
  <div className="row">
    <div className="col-12">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-xl-3 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">2043</h4>
              <div className="d-flex justify-content-between">
                <h4 className="text-muted">Total Eligible Schemes</h4>
                <img src="assets/images/icon/cart.png" style={{height: 50, width: 50}} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-xl-3 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">₹0</h4>
              <div className="d-flex justify-content-between">
                <h4 className="text-muted">Total Scheme Earnings</h4>
                <img src="assets/images/icon/pending.png" style={{height: 50, width: 50}} />
              </div>   
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-xl-3 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">₹0</h4>
              <div className="d-flex justify-content-between">
                <h4 className="text-muted">Total Sellin Amount</h4>
                <img src="assets/images/icon/amount.png" style={{height: 50, width: 50}} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-xl-3 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">₹0</h4>
              <div className="d-flex justify-content-between">
                <h4 className="text-muted">Total SellOut Amount</h4>
                <img src="assets/images/icon/rupee.png" style={{height: 50, width: 50}} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <img src="assets/images/icon/setting.png" style={{height: 50, width: 50, paddingRight: 5}} />
                    <li className="breadcrumb-item"><a href="#"><h4 style={{paddingTop: 15}}>SCHEME CALCULATIONS</h4></a></li>
                    <li>See your Scheme Earnings based on your Purchases, Sales &amp; Activations</li>
                    <button type="button" className="btn btn-outline-secondary btn-lg btn-block">View Scheme Calculations  &gt;</button>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <img src="assets/images/icon/setting.png" style={{height: 50, width: 50, paddingRight: 5}} />
                    <li className="breadcrumb-item"><a href="#"><h4 style={{paddingTop: 15}}>CONFIGURE RETAILER TYPE</h4></a></li>
                    <li>You have a few retailer Type to be configured. Configure now to see eligible schemes</li>
                    <button type="button" className="btn btn-outline-secondary btn-lg btn-block">View all Retailer Types&gt;</button>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 stretch-card grid-margin">
            <div className="card">
              <div className="card-body">
                <p className="ps-0 pb-2 ">Top Brand Earnings</p>
                <h6 className="border-bottom">For current month</h6>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="ps-0  pb-2 border-bottom" />
                        <th className="border-bottom pb-2">Brand</th>
                        <th className="border-bottom pb-2">Earnings</th>
                      </tr>
                    </thead>
                  </table><br />
                  <h5>No eligible products.<a href="url">Add Stocks/Sales</a> to view calculations</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 stretch-card grid-margin">
            <div className="card">
              <div className="card-body">
                <p className="ps-0 pb-2">Top Product Earnings</p>
                <h6 className="border-bottom">For current month</h6>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="ps-0  pb-2 border-bottom" />
                        <th className="border-bottom pb-2">Product</th>
                        <th className="border-bottom pb-2">Earnings</th>
                      </tr>
                    </thead>
                  </table><br />
                  <h5>No eligible products.<a href="url"> Add Stocks/Sales</a> to view calculations</h5>
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
