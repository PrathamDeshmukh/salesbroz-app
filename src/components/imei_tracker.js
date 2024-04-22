import React, { Component } from 'react'
export default class IMEI_tracker extends Component {
  render() {
    return (
     <div>
    <div className="row">
      <div className="col-md-12 grid-margin">
        <div className="row">
          <h4>Scan/Enter IMEI's to track</h4>
          <div className="col-md-12 grid-margin">
            <input type="text" className="form-control p-2" placeholder="Enter Imeis to Scan" defaultValue />  
          </div>
          <div className="col-12 col-xl-8 mb-4 mb-xl-0">
            <button type=" button " id="all-btn" className="btn btn-primary ">All</button>
            <button type="button" id="activated-btn" className="btn btn-primary active ">Activated</button>
            <button type="button" id="sale-out-btn" className="btn btn-primary active ">Sell Out</button>
            <button type="button" id="sall-in-btn" className="btn btn-primary active ">Sell in</button>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 grid-margin">
        <div className="row">
          <div className="col-12 col-xl-12 mb-4 mb-xl-0">
            <div id="all-section">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 mb-4 stretch-card transparent">
                      <h2 className="font-weight-bold">IMEI:66666666666</h2>
                    </div>
                    <div className="col-md-6 mb-4 justify-content-end  ">
                      <button type="button" className="btn btn-primary">Move to Sell Out</button>
                    </div>
                  </div>
                  <p>Activity for IMEI:66666666666</p>
                  <div className="col-12 col-xl-12 mb-4 mb-xl-0">
                    Sell in<br />
                    Vivo Y11(3/32GB)was purchased on Sat, Jun 18, 2023.<br />
                    Purchase Invoice: N/A<br />
                    This product is there in your stocks for 639 Days<br />
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-xl-12 mb-4 mb-xl-0">
        <div id="all-section">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-4 stretch-card transparent">
                  <h2 className="font-weight-bold">IMEI:444444444444</h2>
                </div>
                <div className="col-md-6 mb-4 justify-content-end  ">
                  <button type="button" className="btn btn-primary">Move to Sell Out</button>
                </div>
              </div>
              <p>Activity for IMEI:444444444444</p>
              <div className="col-12 col-xl-12 mb-4 mb-xl-0">
                Sell in<br />
                Vivo Y11(3/32GB)was purchased on Sat, Jun 18, 2023.<br />
                Purchase Invoice: N/A<br />
                This product is there in your stocks for 639 Days<br />
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
    
