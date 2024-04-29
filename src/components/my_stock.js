import React from 'react'

export default function My_stock() {
  return (
   <div>
  <div className="row">
    <div className="col-md-12 grid-margin transparent">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-4 stretch-card transparent">
              <input type="text" className="form-control p-2" name="tags" id="tags" placeholder="Filter Here" defaultValue />
            </div>
            <div className="col-md-6 mb-4 transparent">
          
              <button type="button" className="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              + Add Stocks
        </button>



     {/* Modal */}
     <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog  ">
    <div className="modal-content">
      <div className="modal-header">
        <h3 className="card-description"> Add New Stock</h3>
        
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
          <div className="row">
            <div className="col-12">
              <div className="popover-static-demo">                   
                <div className="popover bs-popover-bottom bs-popover-bottom-demo popover-info">
                  <div className="arrow" />
                  <h3 className="popover-header">Mobiles</h3>
                  <div className="popover-body">
                    <p>Total Count  :  4</p><br />
                    <p>Total Value  :  49,978</p>
                  </div>
                </div>
                <div className="popover bs-popover-bottom bs-popover-bottom-demo popover-warning">
                  <div className="arrow" />
                  <h3 className="popover-header">Accessories</h3>
                  <div className="popover-body">
                    <p>Total Count  :  -</p><br />
                    <p>Total Value  :  -</p>
                  </div>
                </div>
                <div className="popover bs-popover-bottom bs-popover-bottom-demo popover-primary">
                  <div className="arrow" />
                  <h3 className="popover-header">Overall</h3>
                  <div className="popover-body">
                    <p>Total Count  :  4</p><br />
                    <p>Total Value  :  49,978</p>
                  </div>
                </div> 
                <div className="clearfix" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 stretch-card transparent">
              Showing Stocks Data for
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-2 transparent float-end">
              <input type="text" className="form-control p-2" placeholder="Search Stock" defaultValue />
            </div>
            <div className="col-md-6 mb-2 transparent">
              <a className="btn btn-primary float-end" href>Export to Excel</a>
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
                <tr><th>XIAOMI 27,998(2 units)</th>
                </tr><tr>
                  <th>Model</th>
                  <th>Quantity</th>
                  <th>Total Value</th>
                  <th>Settings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Poco M2 Pro 4/64GB</td>
                  <td>2</td>
                  <td>27,998</td>
                  <td>Show IMEIs</td>
                </tr>
              </tbody>
            </table>
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
                <tr><th>VIVO 21,980(2 units)</th>
                </tr><tr>
                  <th>Model</th>
                  <th>Quantity</th>
                  <th>Total Value</th>
                  <th>Settings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Y20 4/64GB</td>
                  <td>1</td>
                  <td>12,990</td>
                  <td>Show IMEIs</td>
                </tr><tr>
                  <td>Y11 3/32GB</td>
                  <td>1</td>
                  <td>8,990</td>
                  <td>Show IMEIs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
