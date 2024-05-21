import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const tableName = 'employee'; // Specify the table name here
 
  useEffect(() => {
      axios.post(`http://localhost/salesbroz_react_app/get_tableData.php`, { table: tableName })
          .then(response => {
              setEmployees(response.data);
          })
          .catch(error => {
              console.error('Error fetching data: ', error);
          });
  }, [tableName]);


 
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    address: ' ',
    aadhar_no: ' ',
    sale_permission: ' ',
    purchase_permission: ' ',
    password:''
    
});
const [c_pass, setc_pass] = useState('');
const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== c_pass) {
        setErrorMessage("Passwords do not match");
        setSuccessMessage('');
        return;
    }

    setErrorMessage('');

    try {
        const response = await axios.post('http://localhost/salesbroz_react_app/post_tableData.php', {
            table: 'employee',
            fields: formData
        });
        console.log(response.data); // Output: New record created successfully
        setSuccessMessage("Data added successfully");
        // Optionally, reset the form fields after successful submission
        setFormData({
            name: '',
            age: '',
            address: '',
            aadhar_no: '',
            password: ''
        });
        setc_pass('');
    } catch (error) {
        console.error('Error inserting data: ', error);
        setErrorMessage("Error: Unable to add data");
        setSuccessMessage('');
    }
};

const updatePermission = (id, field, value) => {
  axios.post('http://localhost/salesbroz_react_app/updateEmployee.php', {
    id,
    field,
    value
  })
  .then(response => {
    // Update the state to reflect changes
    setEmployees(employees.map(emp => emp.id === id ? { ...emp, [field]: value } : emp));
  })
  .catch(error => {
    console.error('There was an error updating the employee permission!', error);
  });
};
const handlePermissionChange = (id, field, value) => {
  const action = value === 'yes' ? 'allow' : 'deny';
  const permissionType = field === 'sale_permission' ? 'sales' : 'purchase';

  if (window.confirm(`Are you sure you want to ${action} ${permissionType} permission?`)) {
    updatePermission(id, field, value);
  }
};






    return (
       <div className="row">
  <div className="col-md-12 grid-margin transparent">
    <div className="row">
      <div className="col-md-6 mb-4  transparent">
        <h2 className="font-weight-bold">All Employees</h2>
       
           
      </div>
      <div className="col-md-6 mb-4  transparent">
       
      
        <button type="button" className="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
           Add Employee
        </button>

     {/* Modal */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog  ">
    <div className="modal-content">
      <div className="modal-header">
        <h3 className="card-description"> Add New Employee info</h3>
        
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
      







     <div className="row">
  <div className="col-md-12 grid-margin">
    {/* Product table will be loaded here */}
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="form-sample" >
         
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Employee Full Name:</label>
                <input type="text" name="name" className="form-control form-control-sm" value={formData.name} onChange={handleChange} required/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Contact Number:</label>
                <input type="text" name="phone" className="form-control form-control-sm" value={formData.phone} onChange={handleChange} required/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Create Password:</label>
                <input type="password" name="password" className="form-control form-control-sm" value={formData.password} onChange={handleChange} required/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Confirm Password:</label>
                <input type="password" name="c_pass" className="form-control form-control-sm"  value={c_pass} onChange={(e) => setc_pass(e.target.value)} required/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Age:</label>
                <input type="text" name="age" className="form-control form-control-sm" value={formData.age} onChange={handleChange} required/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Adhar Number:</label>
                <input type="text" name="aadhar_no" className="form-control form-control-sm" value={formData.aadhar_no} onChange={handleChange} required/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Address:</label>
                <input type="text" name="address" className="form-control form-control-sm" value={formData.address} onChange={handleChange} required/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Allow sales Permissions:</label>
                <select name="sale_permission" className="form-control form-control-sm" value={formData.sale_permission} onChange={handleChange} required>
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Allow Purchase Permissions:</label>
                <select name="purchase_permission" className="form-control form-control-sm" value={formData.purchase_permission} onChange={handleChange} required>
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

          </div>
          
          <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" id="product-btn" className="submit-button btn btn-primary ">Add </button>
      </div>
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
  <div className="row">
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-borderless">
              <thead>
                <tr>
                <th>Sale Action</th>
                  <th>Purchase Action</th>
                  <th>Sale <br />Permission</th>
                  <th>Purchases <br /> Permission</th>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Password</th>
                  <th>Age</th>
                  <th>Adhar Number</th>
                  <th>Address</th>
                 
                  <th>Create At</th>
                  <th>Update At</th>
                 
                </tr>
              </thead>
              <tbody>



              {employees.map(employee => (
            <tr key={employee.id}>
              <td>
              {employee.sale_permission === 'yes' ? (
                <button   type="button" class="btn btn-danger btn-rounded btn-fw"
                onClick={() => handlePermissionChange(employee.id, 'sale_permission', 'no')}>Deny </button>
              ) : (
                <button   type="button" class="btn btn-primary btn-rounded btn-fw"
                onClick={() => handlePermissionChange(employee.id, 'sale_permission', 'yes')}>Allow </button>
              )}
               
              </td>
              <td>
              {employee.purchase_permission === 'yes' ? (
                <button  type="button" class="btn btn-danger btn-rounded btn-fw"
                 onClick={() => handlePermissionChange(employee.id, 'purchase_permission', 'no')}>Deny </button>
              ) : (
                <button  type="button" class="btn btn-primary btn-rounded btn-fw"
                 onClick={() => handlePermissionChange(employee.id, 'purchase_permission', 'yes')}>Allow</button>
              )}
               
              </td>
              <td>{employee.sale_permission}</td>
              <td>{employee.purchase_permission}</td>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              
              <td>{employee.phone}</td>
              <td>{employee.password}</td>
              <td>{employee.age}</td>
              <td>{employee.aadhar_no}</td>
              <td>{employee.address}</td>
             
              <td>{employee.create_at}</td>
              <td>{employee.update_at}</td>
              
            </tr>
          ))}
                
              </tbody>
            </table>
            <nav>
              <ul className="pagination flex-wrap">
                <li className="page-item"><a className="page-link" href="#"><i className="ti-angle-left" /></a></li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#"><i className="ti-angle-right" /></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div></div>

          
       

    
);
};

export default MyEmployee;