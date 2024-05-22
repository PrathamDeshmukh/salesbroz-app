import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Purchases_invoice= () => {
  const [activeBtn, setActiveBtn] = useState('first');
  
  const toggleTable = (btn) => {
    setActiveBtn(btn);
  };
  const [invoices, setInvoices] = useState([]);
  const tableName = 'purchase_invoice'; // Specify the table name here

  useEffect(() => {
      axios.post(`http://localhost/salesbroz_react_app/get_tableData.php`, { table: tableName })
          .then(response => {
              setInvoices(response.data);
          })
          .catch(error => {
              console.error('Error fetching data: ', error);
          });
  }, [tableName]);

    return (
       <div>
  <div className="row">
    <div className="col-md-12 grid-margin transparent">
      <div className="row">
        <div className="col-md-5 mb-4  transparent">
          <h2 className="font-weight-bold">All Purchase Invoices</h2>
        </div>
        <div className="col-md-7 mb-2  transparent">
          <div className="row">
            <div className="col-md-6 mb-4 stretch-card transparent">
              <input type="text" className="form-control p-2" name="tags" id="tags" defaultValue="Arvind" />
            </div>
            <div className="col-md-2 mb-4 stretch-card transparent">
              <button type="button" className="btn btn-primary float-end">Filter</button>
            </div>
            <div className="col-md-2 mb-4 stretch-card transparent">
              <button type="button" className="btn btn-primary float-end">Download</button>
            </div>
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
  </div>
  <div className="row">
    <div className="col-md-12 grid-margin transparent">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8 mb-4 stretch-card transparent">
              <input type="text" className="form-control p-2" name="tags" id="tags" placeholder="Filter Here" defaultValue />
            </div>
            <div className="col-md-2 mb-4 stretch-card transparent">
              <button type="button" className="btn btn-link btn-fw ">Pending purchase </button>
            </div>
            <div className="col-md-2 mb-4 transparent">
          
              <button type="button" className="btn btn-link btn-fw " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
               Add Purchase Invoice
        </button>
         {/* Modal */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog  ">
    <div className="modal-content">
      <div className="modal-header">
      <div className="row">
           <div className="col-md-12 grid-margin transparent">
        
              <h3 className="card-description">  New Purchase Invoice</h3>
            
             </div>
          
        </div>
        <div className="row">
          
           <div className="col-md-12 grid-margin transparent ">
                   <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" />
                     Local
                </label>
                &nbsp;&nbsp;
               <label className="form-check-label">
              <input type="checkbox" className="form-check-input" />
                IGST
               </label>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
        </div>
      </div>
      <div className="modal-body">








     <div className="row">
  <div className="col-md-12 grid-margin">
    {/* Product form will be loaded here */}
    <div className="row">
    <div className="col-md-12 grid-margin">
      
          <button type=" button " id="first_btn"
          style={{ fontWeight: activeBtn === 'first' ? 'bold' : 'normal' }} 
          onClick={() => toggleTable('first')} className="btn btn-outline-secondary btn-lg btn-block ">With Models</button>

          &nbsp; &nbsp; &nbsp;<button type="button"  id="second_btn"
          style={{ fontWeight: activeBtn === 'second' ? 'bold' : 'normal' }} 
          onClick={() => toggleTable('second')} className="btn btn-outline-secondary btn-lg btn-block  ">Without Models</button>
        
    </div>
  </div>
  <div className="row">
    <div className="col-md-12 grid-margin">
    <div className="card">
              <div className="card-body" >
                <div className="row">
    <div className="col-md-12 grid-margin">
    
          {/* Product form will be loaded here */}
          
              <form id="first_table" style={{ display: activeBtn === 'first' ? 'table' : 'none' }} className="col-md-12 form-sample" >
             
                  
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
               <label htmlFor="exampleInputUsername1">Aadhar Number:</label>
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
              <form className="col-md-12 form-sample" id="second_table" style={{ display: activeBtn === 'second' ? 'table' : 'none' }}>
                   
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                      <label htmlFor="exampleInputUsername1">Vendor Number:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" placeholder="Phone Number" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Vendor Alternate Number:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" placeholder="Vendor Alternate Number" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Vendor Name:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" placeholder="Vendor Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Vendor Email:</label>
                        <input type="email" className="form-control form-control-sm" id="exampleInputUsername1" placeholder="Vendor Email" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Bill Number:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" placeholder="Bill Number" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Bill Date:</label>
                        <input type="date" value="21/05/2024" className="form-control form-control-sm" id="exampleInputUsername1" placeholder="" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">GST Number:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" placeholder="GST Number" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Type of Invoice:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" placeholder="GST Invoice" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Address:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" placeholder="Enetr Your Address" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">City:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" placeholder="Enter Your City" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">State:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" placeholder="Enetr Your State" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Pin Code:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" placeholder="Enter Pin Code" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Countrty:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" placeholder="Enter Country" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Payment Mode:</label>
                        <select id="cars" name="cars" placeholder="Select Payment Mode" className="form-control form-control-sm">
                        <option value="volvo">Select Payment Method</option>
                        <option value="saab">UPI</option>
                        <option value="fiat">Debit Card</option>
                        <option value="audi">Credit Card</option>
                        <option value="audi">Net Banking</option>
                        </select>
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                            TCS
                          </label>
                            &nbsp;&nbsp;
                          <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                            EMI
                           </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Total Amount:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" placeholder="Total Amount" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Tax Amount:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" placeholder="Tax Amount" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Paid Amount:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" placeholder="Paid Amount" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Pending Amount:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" placeholder="Pending Amount" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Invoice Notes:</label>
                        <input type="text" className="form-control form-control-sm" id="exampleInputUsername1" placeholder="Invoice Notes" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                      <button type="button" className="btn btn-primary">Add Invoice Image</button>
                       </div>
                    </div>
                  </div>
                  
                </form>
                </div>
  </div>
             
          
    
    </div>
  </div>
  </div>
  </div>
  {/* first-active-section */}
 

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
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="form-responsive">
            <form className="table table-striped table-borderless">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Bill No.</th>
                  <th>Vendor<br />Name</th>
                  <th>Vendor<br />Phone</th>
                  <th>Paid</th>
                  <th>Amount</th>
                  <th>Pending<br />Amount</th>
                  <th>Payment<br />Mode</th>
                  <th>Payments</th>
                  <th>Products</th>
                </tr>
              </thead>
              <tbody>
                
                 
              {invoices.map(invoice => (
            <tr key={invoice.id}>
              <td>{invoice.date}</td>
              <td>{invoice.bill_no}</td>
              <td>{invoice.v_name}</td>
              <td>{invoice.v_phone}</td>
              <td>{invoice.paid}</td>
              <td>{invoice.v_amount}</td>
              <td>{invoice.pending_amount}</td>
              <td>{invoice.pay_mode}</td>
              <td>
                    <button className="btn btn-outline-primary">ViewUpdate<br />Payments</button>
                  </td>
                  <td>
                    <button className="btn btn-outline-primary">View Products</button>
                  </td>
            </tr>
          ))}
              </tbody>
            </form>
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

);
};
export default Purchases_invoice;