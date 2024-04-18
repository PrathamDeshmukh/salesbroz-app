import React, { Component } from 'react'
export default class invoice extends Component {
  render() {
    return (
      <div className="row">
  <div className="col-12">
    <div className="row">
      <div className="col-12 col-sm-6 col-md-6 col-xl-3 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">0</h4>
            <div className="d-flex justify-content-between">
              <h4 className="text-muted">Total Purchase Invoices</h4>
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
              <h4 className="text-muted">Pending Purchase Amount</h4>
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
              <h4 className="text-muted">Total Purchase Amount</h4>
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
              <h4 className="text-muted">Total Purchase Amount</h4>
              <img src="assets/images/icon/rupee.png" style={{height: 50, width: 50}} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-xl-3 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">0</h4>
            <div className="d-flex justify-content-between">
              <h4 className="text-muted">Total Safe Invoice</h4>
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
              <h4 className="text-muted">Pending Sales Amount</h4>
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
              <h4 className="text-muted">Total Sales Amount</h4>
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
              <h4 className="text-muted">Paid Sales Amount</h4>
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
                  <li className="breadcrumb-item"><a href="#"><h4 style={{paddingTop: 15}}>CREATE PURCHASE INVOICE</h4></a></li>
                  <li>Create your digital purchase invoice on SalesBroz by uploading a copy<br /> of your handwritten invoice</li>
                  <button type="button" className="btn btn-outline-secondary btn-lg btn-block">View More  &gt;</button>
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
                  <img src="assets/images/icon/laptop.png" style={{height: 50, width: 50, paddingRight: 5}} />
                  <li className="breadcrumb-item"><a href="#"><h4 style={{paddingTop: 15}}>CREATE SALE INVOICE</h4></a></li>
                  <li>Create your digital sales invoice on SalesBroz and track paid and pending<br /> payment statuses with ease</li>
                  <button type="button" className="btn btn-outline-secondary btn-lg btn-block">View More  &gt;</button>
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
              <p className="ps-0 pb-2 border-bottom">Latest Purchase Invoice</p>
              <p className="card-title mb-0" style={{textAlign: 'center', paddingBottom: 15, backgroundColor: 'pink', paddingTop: 15}}>CREATE PURCHASE INVOICE</p>
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th className="ps-0  pb-2 border-bottom">Invoice No</th>
                      <th className="border-bottom pb-2">Invoice Date</th>
                      <th className="border-bottom pb-2">Brands</th>
                      <th className="border-bottom pb-2">Invoice Url</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 stretch-card grid-margin">
          <div className="card">
            <div className="card-body">
              <p className="ps-0 pb-2 border-bottom">Latest Sale Invoice</p>
              <p className="card-title mb-0" style={{textAlign: 'center', paddingBottom: 15, backgroundColor: 'pink', paddingTop: 15}}>CREATE SALE INVOICE</p>
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th className="ps-0  pb-2 border-bottom">Invoice No</th>
                      <th className="border-bottom pb-2">Invoice Date</th>
                      <th className="border-bottom pb-2">Products</th>
                      <th className="border-bottom pb-2">Invoice Url</th>
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
