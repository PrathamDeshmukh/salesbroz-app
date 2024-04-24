import React from 'react'

export default function Add_your_model() {
  return (
  <div>
  <div className="row">
    <div className="col-md-12 grid-margin transparent">
      <div className="row">
        <div className="col-md-5 mb-4  transparent">
          <h2 className="font-weight-bold">My Products</h2>
        </div>
        {/* <input  type="text" class="form-control" name="tags" id="tags" value="Arvind" />
          </div>
          <div class="col-md-2 mb-1  justify-content-end transparent">
            <button type="button" class="btn btn-primary float-end">Filter</button>
          </div>
          <div class="col-md-2 mb-1 justify-content-end transparent">
            <button type="button" class="btn btn-primary float-end">Download</button> */}
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12 grid-margin transparent">
      <div className="card ">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-4 transparent">
              <input type="text" className="form-control p-2" placeholder="Search for products, brands and more" defaultValue />
            </div>
            <div className="col-md-6 mb-4 transparent">
              
              
              <button type="button" className="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              + New Products
        </button>



          {/* Modal */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog  ">
    <div className="modal-content">
      <div className="modal-header">
        <h3 className="card-description"> Create New Product</h3>
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
                <label htmlFor="exampleInputUsername1">Enter Model Name:</label>
                <input type="text" name="e_name" className="form-control form-control-sm" id="exampleInputUsername1" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Search Brand:</label>
                <input type="text" name="e_phone" className="form-control form-control-sm" id="exampleInputUsername1" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">DP:</label>
                <input type="texrt" name="dp" className="form-control form-control-sm" id="exampleInputUsername1" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">MOP:</label>
                <input type="text" name="mop" className="form-control form-control-sm" id="exampleInputUsername1" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">MRP:</label>
                <input type="TEXT" name="mrp" className="form-control form-control-sm" id="exampleInputUsername1" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Search HSN:</label>
                <input type="text" name="HSN" className="form-control form-control-sm" id="exampleInputUsername1" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Search Tax Percent:</label>
                <input type="text" name="tax" className="form-control form-control-sm" id="exampleInputUsername1" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Color:</label>
                <input type="text" name="color" className="form-control form-control-sm" id="exampleInputUsername1" />
              </div>
            </div>
          </div>
        
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> &nbsp;
        <button type="button" className="btn btn-primary">Submit</button>
  
          
        </form>
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
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Colours</th>
                  <th>Dp₹</th>
                  <th>Mop₹</th>
                  <th>Mrp₹</th>
                  <th>setting</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Samsung</td>
                  <td>S24 ultra</td>
                  <td>Black</td>
                  <td>102000₹</td>
                  <td>1022000₹</td>
                  <td>1025000₹</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Apple</td>
                  <td>iphone 14pro</td>
                  <td>Golden</td>
                  <td>103000₹</td>
                  <td>1032000₹</td>
                  <td>1035000₹</td>
                  <td>-</td>
                </tr>
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

  )
}
