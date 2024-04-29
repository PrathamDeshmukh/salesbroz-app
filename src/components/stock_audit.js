import React, { Component } from 'react'

export default class stock_audit extends Component {
  render() {
    return (
        <div>
{/*main panel*/}
<div className="main-panel">
  <div className="content-wrapper">
    <div className="row">
      <div className="col-md-12 grid-margin">
        <div className="row">
          <div className="col-12-mb-4 ">
            <h2 className="font-weight-bold">Stocks Audit</h2><br />
            <div className="row">
              <div className="col-md-7 mb-4 stretch-card transparent">
                <input type="text" className="form-control p-2" placeholder="Search for products, brands and more" defaultValue />
              </div>
              <div className="col-md-5 mb-4 justify-content-end stretch-card transparent ">
                <button type="button" className="btn btn-primary float-end">+ Create Audit</button>
              </div>
            </div>
            
            <button type=" button " id="stock-btn" className="btn btn-primary ">Stocks</button>
            <button type="button" id="adjusted-btn" className="btn btn-primary active ">Adjusted</button>
          
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 grid-margin">
        <div className="row">
          <div className="col-12 col-xl-12 mb-4 mb-xl-0">
            <div id="stock-section">
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-striped table-borderless">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>imei</th>
                        <th>Purchase Price</th>
                        <th>Sell In Date</th>
                        <th>Move to </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/*?php $StockAuditStock = getAllRow('StockAuditStock');
                                                         if (!empty($StockAuditStock)) {
                                                foreach ($StockAuditStock as $StockAuditStock_info) {
                                                             ?*/}
                      <tr>
                        <td>{/*?=$StockAuditStock_info['name']?*/}</td>
                        <td>{/*?=$StockAuditStock_info['imei']?*/}</td>
                        <td>{/*?=$StockAuditStock_info['p_price']?*/}</td>
                        <td>{/*?=$StockAuditStock_info['sell_date']?*/}</td>
                        <td>
                       {/*   <button className="btn btn-outline-primary">move</button>*/}
                        </td>
                      </tr>
                      {/*?php } 
                                                       } ?*/}
                    </tbody>
                  </table>                  
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
            </div> </div>
        </div>
      </div>
    </div>
    {/*-----------------------------------------------------------------------*/}
    <div className="row">
      <div className="col-md-12 grid-margin">
        <div className="row">
          <div className="col-12 col-xl-12 mb-4 mb-xl-0">
            <div id="adjusted-section" style={{display: 'none'}}>                    
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-striped table-borderless">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>imei</th>
                        <th>Purchase Price</th>
                        <th>Sell In Date</th>
                        <th>Move to </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/*?php $StockAuditAdjust = getAllRow('StockAuditAdjust');
                                                         if (!empty($StockAuditAdjust)) {
                                                foreach ($StockAuditAdjust as $StockAuditAdjust_info) {
                                                             ?*/}
                      <tr>
                        <td>{/*?=$StockAuditAdjust_info['name']?*/}</td>
                        <td>{/*?=$StockAuditAdjust_info['imei']?*/}</td>
                        <td>{/*?=$StockAuditAdjust_info['p_price']?*/}</td>
                        <td>{/*?=$StockAuditAdjust_info['sell_date']?*/}</td>
                        <td>
                          <button className="btn btn-outline-primary">move</button>
                        </td>
                      </tr>
                      {/*?php } 
                                                       } ?*/}
                    </tbody>
                  </table>                  
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
    {/* main-panel ends */}
  </div>
  {/* page-body-wrapper ends */}
</div>
</div>

)
}
}
