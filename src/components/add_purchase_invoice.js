import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

const Add_purchase_invoice = () => {

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleCloseModal1 = () => setShowModal1(false);
  const handleCloseModal2 = () => setShowModal2(false);

  const handleShowModal1 = () => setShowModal1(true);
  const handleShowModal2 = () => {
    setShowModal1(true); // Show Modal 1 to create a backdrop
    setShowModal2(true); // Show Modal 2
  };

  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [modelDetails, setModelDetails] = useState({});
  const [colors, setColors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/salesbroz_react_app/api.php')
      .then(response => {
        setBrands(response.data);
        // console.log(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleBrandSelect = (event) => {
    const brandId = event.target.value;
  //  console.log(brandId);
  //  console.log(brands);
  const brand = brands.find(b =>{return  b.id == brandId});
 
    setSelectedBrand(brand);
    //  console.log(brand);
    setSelectedModel(null);
    setModelDetails({});
    setColors([]);
    if (brandId) {
      axios.get(`http://localhost/salesbroz_react_app/api.php?brand_id=${brandId}`)
        .then(response => {
          setModels(response.data);
          // console.log(response.data)
        })
        .catch(error => console.error(error));
    } else {
      setModels([]);
    }
  };

  const handleModelSelect = (event) => {
    const modelId = event.target.value;
    const model = models.find(m => m.id == modelId);
    setSelectedModel(model);
    // console.log(model)
    if (modelId) {
      axios.get(`http://localhost/salesbroz_react_app/api.php?model_id=${modelId}`)
        .then(response => {
          const data = response.data;
          setModelDetails(data);
          setColors(data.colors.map(color => ({ ...color, quantity: 0, price: 0 })));
          setShowModal1(true);
        })
        .catch(error => console.error(error));
    }
   
  };

  const handleInputChange = (index, field, value) => {
    const updatedColors = colors.map((color, i) => {
      if (i === index) {
        return { ...color, [field]: parseFloat(value) || 0 };
      }
      return color;
    });
    setColors(updatedColors);
  };

  const calculateTotalPrice = (price, quantity) => {
    const totalPrice = price * quantity;
    const taxRate = modelDetails.tax ? modelDetails.tax / 100 : 0.18;
    const tax = totalPrice * taxRate;
    return {
      totalPrice: totalPrice.toFixed(2),
      tax: tax.toFixed(2),
      finalPrice: (totalPrice + tax).toFixed(2)
    };
  };














  const [inputs, setInputs] = useState([
    { BrandName: "", Model: "", Detail: "" },
  ]);

  const handleAddInput = () => {
    setInputs([...inputs, { brandName: "", modelName: "", detail: "" }]);
  };

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...inputs];
    onChangeValue[index][name] = value;
    setInputs(onChangeValue);
  };

  const handleDeleteInput = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
  };

  const [formData, setFormData] = useState({
    Vphone: "",
    Alt_phone: "",
    Vname: "",
    Vemail: "",
    bill_no: "",
    bill_date: "",
    gst: "",
    type_invoice: "",
    address: "",
    pay_mode: "",
    total_amount: "",
    paid_amount: "",
    tax_amount: "",
    pending_amount: "",
    invoice_detail: "",
  });

  const handleChangeform = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost/salesbroz_react_app/post_tableData.php",
        {
          table: " purchase_invoice",
          fields: formData,
        }
      );
      console.log(response.data); // Output: New record created successfully
      alert("data enter successfully");
      // Optionally, reset the form fields after successful submission
      setFormData({
        Vphone: "",
        Alt_phone: "",
        Vname: "",
        Vemail: "",
        bill_no: "",
        bill_date: "",
        gst: "",
        type_invoice: "",
        address: "",
        pay_mode: "",
        total_amount: "",
        paid_amount: "",
        tax_amount: "",
        pending_amount: "",
        invoice_detail: "",
      });
    } catch (error) {
      console.error("Error inserting data: ", error);
      alert("There was an error");
    }
  };

  const [activeBtn, setActiveBtn] = useState("first");

  const toggleTable = (btn) => {
    setActiveBtn(btn);
  };
  const [invoices, setInvoices] = useState([]);
  const tableName = "purchase_invoice"; // Specify the table name here

  useEffect(() => {
    axios
      .post(`http://localhost/salesbroz_react_app/get_tableData.php`, {
        table: tableName,
      })
      .then((response) => {
        setInvoices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [tableName]);

  return (
    <div>
      <div className="row">
        <div className="col-md-12 grid-margin transparent">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="row">
                  <div className="col-md-6 mb-4  transparent">
                    <h3 className="card-description"> New Purchase Invoice</h3>
                  </div>
                  <div className="col-md-6 mb-4  transparent d-flex justify-content-end  ">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      Local
                    </label>
                    &nbsp;&nbsp;
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      IGST
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 grid-margin">
                    {/* Product form will be loaded here */}
                    <div className="row">
                      <div className="col-md-12 grid-margin">
                        <button
                          type=" button "
                          id="first_btn"
                          style={{
                            fontWeight:
                              activeBtn === "first" ? "bold" : "normal",
                          }}
                          onClick={() => toggleTable("first")}
                          className="btn btn-outline-secondary btn-lg btn-block "
                        >
                          With Models
                        </button>
                        &nbsp; &nbsp; &nbsp;
                        <button
                          type="button"
                          id="second_btn"
                          style={{
                            fontWeight:
                              activeBtn === "second" ? "bold" : "normal",
                          }}
                          onClick={() => toggleTable("second")}
                          className="btn btn-outline-secondary btn-lg btn-block  "
                        >
                          Without Models
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 grid-margin">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-12 grid-margin">
                                {/* Product form will be loaded here */}
                                <div
                                  id="first_table"
                                  style={{
                                    display:
                                      activeBtn === "first" ? "table" : "none",
                                  }}
                                  className="col-md-12 "
                                >
                                  <form
                                    onSubmit={handleSubmit}
                                    className="col-md-12 form-sample"
                                  >
                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="table-responsive pt-6">
                                          <table className="table table-bordered">
                                            <thead className="table-light">
                                              <tr>
                                                <th>Brand</th>
                                                <th>Model</th>
                                                <th>Purchase Price</th>
                                                <th>Quantity</th>
                                              </tr>
                                            </thead>
                                            <tbody className="table-light">
                                              <tr>
                                                <td>yess</td>
                                                <td>yess</td>
                                                <td>yes</td>
                                                <td>yes</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                    <br></br>
                                    {inputs.map((item, index) => (
                                      <div key={index} className="row">
                                        <div className="col-md-3">
                                          <div className="form-group">
                                            <label htmlFor="exampleInputUsername1">
                                              Brand Name:
                                            </label>
                                            <select  className="form-control form-control-sm"
                                              name="brandName"
                                              type="text" id="brand-select" 
                                              value={item.brandName}
                                              onChange={(event) => {
                                                handleBrandSelect(event);
                                                handleChange(event, index);
                                              }}>
          <option value="">--Select Brand--</option>
          {brands.map(brand => (
            <option key={brand.id} value={brand.id}>{brand.name}</option>
          ))}
        </select>
                                           
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="form-group">
                                            <label htmlFor="exampleInputUsername1">
                                              Model:
                                            </label>
                                            <select
                                             className="form-control form-control-sm" id="model-select" value={item.modelName}
                                              onChange={(event) => {
                                                handleModelSelect(event);
                                                handleChange(event, index);
                                              }}>
          <option value="">--Select Model--</option>
          {models.map(model => (
            <option key={model.id} value={model.id}>{model.name}</option>
          ))}
        </select>
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="form-group">
                                            <button
                                              id="addField"
                                              type="button"
                                              className="btn btn-link btn-fw "
                                            
                                              onClick={handleShowModal1}
                                            >
                                              +Add Detail
                                            </button>
                                           


                                                  <Modal  show={showModal1} onHide={handleCloseModal1} backdropClassName="modal-backdrop-blur"size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Add Quantity</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             {/* Modal */}
           

          <div className="row">
                                                      <div className="col-md-12 grid-margin">
                                                        {/* Product table will be loaded here */}
                                                        <div className="card">
                                                          <div className="card-body">
                                                            <div className="row mx-auto">
                                                              <div className="col-md-12   transparent d-flex justify-content-start">
                                                                <div className="form-group col-sm-5 d-flex justify-content-start">
                                                                  <label
                                                                    htmlFor="exampleInputUsername2"
                                                                    className="col-form-label  p-3"
                                                                  >
                                                                    Item Detail:
                                                                  </label>
                                                                  <div className="row col-form-label p-3">
                                                                  {selectedBrand && selectedModel ? (
            <>
              <p style={{ fontSize: '12px' }}className="p-1"><b>{selectedBrand.name}{selectedModel.name}</b></p>
             
            </>
          ) : (
            <p>No details available</p>
          )}
                                                                  </div>
                                                                 
                                                                </div>{" "}
                                                                <div className="form-group col-sm-3 d-flex justify-content-start">
                                                           
                                                                  <label
                                                                    htmlFor="exampleInputUsername2"
                                                                    className="col-form-label  p-3"
                                                                  >
                                                                   
                                                                    HSN:
                                                                  </label>
                                                                  <div className="row  p-3">
                                                                  <>
            <p style={{ fontSize: '12px' }} className="p-1"><b> {modelDetails.hsn}</b></p>
           
          </>
                                                                  </div>
                                                                 
                                                                </div>{" "}
                                                                <div className="form-group col-sm-3 d-flex justify-content-start">
                                                                
                                                                  <label
                                                                    htmlFor="exampleInputUsername2"
                                                                    className=" col-form-label  p-3"
                                                                  >
                                                                    TAX %:
                                                                  </label>
                                                                  <div className="row  p-3 ">
                                                                  <>
              <p style={{ fontSize: '12px' }}className="p-1"><b> {modelDetails.tax}</b></p>
             
            </>
                                                                  </div>
                                                                </div>{" "}
                                                              </div>
                                                            </div>
                                                            <div className="row">
                                                              <div className="col-md-12 mt-2  transparent   justify-content-start  ">
                                                                <label className="form-check-label">
                                                                  <input
                                                                    type="checkbox"
                                                                    className="form-check-input"
                                                                  />
                                                                  Enter Serial
                                                                  Number/ IMEIs
                                                                  for Items
                                                                </label>
                                                              </div>
                                                            </div>
                                                            <br />

                                                            <div className="row">
                                                              <div className="table-responsive">
                                                                <table className="table table-striped table-bordered">
                                                                  <thead>
                                                                    <tr>
                                                                      <th>
                                                                        Colors
                                                                      </th>
                                                                      <th>
                                                                        Quantity
                                                                      </th>
                                                                      <th>
                                                                        GST
                                                                        <br />
                                                                        Include
                                                                      </th>
                                                                      <th>
                                                                        Purchase
                                                                        <br />
                                                                        Price/Unit
                                                                      </th>
                                                                      <th>
                                                                        Tax
                                                                        <br />
                                                                        Value/Unit
                                                                      </th>
                                                                      <th>
                                                                        Product
                                                                        Price{" "}
                                                                        <br />
                                                                        Without
                                                                        <br />
                                                                        Value/Unit
                                                                      </th>
                                                                      <th>
                                                                        Final
                                                                        <br />
                                                                        Price/Unit
                                                                      </th>
                                                                    </tr>
                                                                  </thead>
                                                                  <tbody>
                                                                  {colors.map((color, index) => {
                    const { totalPrice, tax, finalPrice } = calculateTotalPrice(color.price, color.quantity);
                    return (
                      <tr key={index}>
                                                                     <td>{color.color}</td>
                                                                      <td>
                                                                        <input
                                                                          type="number"
                                                                          className="form-control col-xs-2 p-1"
                                                                          id="exampleInputUsername2"
                                                                          placeholder="Number"
                                                                          value={color.quantity}
                                                                          onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                                                                        
                                                                        />
                                                                      </td>
                                                                      <td>
                                                                        {" "}
                                                                        <label className="form-check-label">
                                                                          <input
                                                                            type="checkbox"
                                                                            className="form-check-input"
                                                                          />
                                                                          IGST
                                                                        </label>
                                                                      </td>
                                                                      <td>
                                                                        <input
                                                                          type="text"
                                                                          className="form-control p-1"
                                                                          id="exampleInputUsername2"
                                                                          value={color.price}
                                                                          onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                                                                       
                                                                        />
                                                                      </td>
                                                                      <td>
                                                                      {tax}
                                                                      </td>
                                                                      <td>
                                                                      {totalPrice}
                                                                      </td>
                                                                      <td>
                                                                       {finalPrice}
                                                                      </td>
                                                                    </tr>
                                                                      );
                                                                      })}
                                                                  </tbody>
                                                                </table>
                                                              </div>
                                                            </div>
                                                            <div className="row">
                                                              <div className="col-md-6 mb-4 transparent">
                                                                <Link
                                                                  to="/add_purchase_invoice"
                                                                  type="button"
                                                                  className="btn btn-link btn-fw "
                                                                >
                                                                  +Add missing
                                                                  colors
                                                                </Link>
                                                              </div>

                                                              <div className="col-md-6 mb-4 transparent">
                                                                <Link
                                                                  to="/add_purchase_invoice"
                                                                  type="button"
                                                                  className="btn btn-link btn-fw "
                                                                >
                                                                  +Add more
                                                                  colors
                                                                </Link>
                                                              </div>
                                                            </div>
                                                            <div className="row">
                                                              <div className="col-md-12 d-flex ">
                                                                <div className="form-group">
                                                                  <input
                                                                    type="text"
                                                                    name="color"
                                                                    className="form-control form-control-sm"
                                                                    placeholder="Select or enter Color name"
                                                                    required
                                                                  />
                                                                </div>
                                                                <div className="form-group">
                                                                  <Link
                                                                    to="/add_purchase_invoice"
                                                                    type="button"
                                                                    className="btn btn-link btn-fw "
                                                                  >
                                                                    Select the
                                                                    color
                                                                  </Link>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal1}>
              Close
            </Button>
            <Button variant="primary" onClick={handleShowModal2}>
              Next
            </Button>
          </Modal.Footer>
                                                  </Modal>
  
                                                     <Modal show={showModal2} onHide={handleCloseModal2} dialogClassName="modal-highlight" size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Enter IMEI Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        
            
          <div className="row">
                                                      <div className="col-md-12 grid-margin">
                                                        {/* Product table will be loaded here */}
                                                        <div className="card">
                                                          <div className="card-body">
                                                          <div className="row">
                                                              <div className="col-md-12 mt-2  transparent  d-flex justify-content-start  ">
                                                              <div className="col-md-6   transparent ">
                                                                <div className="form-group row ">
                                                                  <h6>Scan Barcode<br/>
                                                                  barcode scanner is now active.Click to disable scanner</h6>
                                                                  
                                                                 
                                                               
                                                                  
                                                                 
                                                                </div>
                                                              </div>
                                                              <div className="col-md-1   transparent ">
                                                                <div className="form-group row ">
                                                                <button
                                        type="button"
                                        className="button btn btn-primary "
                                      >
                                      Enable
                                      </button>
                                                               
                                                                  
                                                                 
                                                                </div>
                                                              </div>
                                                              

                                                              </div>
                                                            </div>
                                                            <div className="row">
                                                              <div className="col-md-12 mt-2  transparent  justify-content-start  ">
                                                              
                                                                <div className="form-group row ">
                                                                  <h6>ENTER IMEI
                                                                  </h6>
                                                                 
                                                                </div>
                                                              
                                            
                                                              </div>
                                                            </div>
                                                            <div className="row">
                                                              <div className="col-md-12 mt-2  transparent  d-flex justify-content-start  ">
                                                              <div className="col-md-6   transparent d-flex justify-content-start  ">
                                                                <div className="form-group row ">
                                                                  <h6>Item Detail:</h6>
                                                                </div> &nbsp;
                                                                <div className="form-group row ">
                                                                
                                                                  
                                                                  <h6>Oppo AS23er</h6>
                                                               
                                                                  
                                                                 
                                                                </div>
                                                              </div>
                                                              </div>
                                                            </div>

                                                            <div className="row">
                                                              <div className="col-md-12 mt-2  transparent  d-flex justify-content-start  ">
                                                              <div className="col-md-3  transparent d-flex justify-content-start  ">
                                                                <div className="form-group row ">
                                                                  <h6>Item Detail:</h6>
                                                                </div> &nbsp;
                                                                <div className="form-group row ">
                                                                
                                                                  
                                                                  <h6>Color</h6>
                                                               
                                                                  
                                                                 
                                                                </div>
                                                              </div>
                                                              <div className="col-md-3   transparent d-flex justify-content-start  ">
                                                                <div className="form-group row ">
                                                                  <h6>Quantity:</h6>
                                                                </div> &nbsp;
                                                                <div className="form-group row ">
                                                                
                                                                  
                                                                  <h6>100</h6>
                                                               
                                                                  
                                                                 
                                                                </div>
                                                              </div>
                                                              <div className="col-md-3   transparent d-flex justify-content-start  ">
                                                                <div className="form-group row ">
                                                                  <h6>Product Price:</h6>
                                                                </div> &nbsp;
                                                                <div className="form-group row ">
                                                                
                                                                  
                                                                  <h6>9000</h6>
                                                               
                                                                  
                                                                 
                                                                </div>
                                                              </div>
                                                              </div>
                                                            </div>
                                                          
                                                          
                                                           
                                                          
                                                            <br />
                                                            <div className="row mx-auto">
                                                              <div className="col-md-12   transparent  justify-content-start">
                                                                <div className="form-group  justify-content-start">
                                                                  <label
                                                                    htmlFor="exampleInputUsername2"
                                                                    className="col-sm-1 col-form-label  p-1"
                                                                  >
                                                                    IMEI:
                                                                  </label>
                                                                  <div className="col-sm-6 ps-1">
                                                                    <input
                                                                      type="text"
                                                                      className="form-control  p-1 "
                                                                      id="exampleInputUsername2"
                                                                      required
                                                                    />
                                                                  </div>
                                                                  <label
                                                                    htmlFor="exampleInputUsername2"
                                                                    className="col-sm-1 col-form-label  p-1"
                                                                  >
                                                                     IMEI:
                                                                  </label>
                                                                  <div className="col-sm-6  ps-1">
                                                                    <input
                                                                      type="text"
                                                                      className="form-control  p-1"
                                                                      id="exampleInputUsername2"
                                                                      required
                                                                    />
                                                                  </div>
                                                                  <label
                                                                    htmlFor="exampleInputUsername2"
                                                                    className="col-sm-1 col-form-label  p-1"
                                                                  >
                                                                   IMEI:
                                                                  </label>
                                                                  <div className="col-sm-6  ps-1">
                                                                    <input
                                                                      type="text"
                                                                      className="form-control  p-1"
                                                                      id="exampleInputUsername2"
                                                                      required
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>






                                                           
                                                          
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                         
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal2} >
              Close
            </Button>
            <Button  type="submit"
                                        className="submit-button btn btn-primary ">
              Next
            </Button>
          </Modal.Footer>
                                                           </Modal>













                                                 
                                              
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="form-group">
                                            {inputs.length > 1 && (
                                              <button
                                                type="button"
                                                className="btn btn-link btn-fw removeField"
                                                onClick={() =>
                                                  handleDeleteInput(index)
                                                }
                                              >
                                                Remove
                                              </button>
                                            )}
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="form-group">
                                            {index === inputs.length - 1 && (
                                              <button
                                                id="addField"
                                                type="button"
                                                className="btn btn-link btn-fw "
                                                onClick={() => handleAddInput()}
                                              >
                                                +Add More Products
                                              </button>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Vendor Number:
                                          </label>
                                          <input
                                            value={formData.Vphone}
                                            onChange={handleChangeform}
                                            type="text"
                                            name="Vphone"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Phone Number"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Vendor Alternate Number:
                                          </label>
                                          <input
                                            value={formData.Alt_phone}
                                            onChange={handleChangeform}
                                            type="text"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Vendor Alternate Number"
                                            name="Alt_phone"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Vendor Name:
                                          </label>
                                          <input
                                            value={formData.Vname}
                                            onChange={handleChangeform}
                                            type="text"
                                            name="Vname"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Vendor Name"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Vendor Email:
                                          </label>
                                          <input
                                            value={formData.Vemail}
                                            onChange={handleChangeform}
                                            type="email"
                                            name="Vemail"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Vendor Email"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Bill Number:
                                          </label>
                                          <input
                                            value={formData.bill_no}
                                            onChange={handleChangeform}
                                            type="text"
                                            name="bill_no"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Bill Number"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Bill Date:
                                          </label>
                                          <input
                                            value={formData.bill_date}
                                            onChange={handleChangeform}
                                            type="date"
                                            name="bil_date"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            GST Number:
                                          </label>
                                          <input
                                            value={formData.gst}
                                            onChange={handleChangeform}
                                            type="text"
                                            name="gst"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="GST Number"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Type of Invoice:
                                          </label>
                                          <input
                                            value={formData.type_invoice}
                                            onChange={handleChangeform}
                                            type="text"
                                            name="type_invoice"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="GST Invoice"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Address:
                                          </label>
                                          <input
                                            value={formData.address}
                                            onChange={handleChangeform}
                                            type="text"
                                            name="address"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Enetr Your Address"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Payment Mode:
                                          </label>
                                          <select
                                            id="cars"
                                            name="pay_mode"
                                            value={formData.pay_mode}
                                            onChange={handleChangeform}
                                            placeholder="Select Payment Mode"
                                            className="form-control form-control-sm"
                                          >
                                            <option value="volvo">
                                              Select Payment Method
                                            </option>
                                            <option value="saab">UPI</option>
                                            <option value="fiat">
                                              Debit Card
                                            </option>
                                            <option value="audi">
                                              Credit Card
                                            </option>
                                            <option value="audi">
                                              Net Banking
                                            </option>
                                          </select>
                                          <label className="form-check-label">
                                            <input
                                              type="checkbox"
                                              className="form-check-input"
                                            />
                                            TCS
                                          </label>
                                          &nbsp;&nbsp;
                                          <label className="form-check-label">
                                            <input
                                              type="checkbox"
                                              className="form-check-input"
                                            />
                                            EMI
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Total Amount:
                                          </label>
                                          <input
                                            value={formData.total_amount}
                                            onChange={handleChangeform}
                                            type="text"
                                            name="total_amount"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Total Amount"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Tax Amount:
                                          </label>
                                          <input
                                            type="text"
                                            name="tax_amount"
                                            value={formData.tax_amount}
                                            onChange={handleChangeform}
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Tax Amount"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Paid Amount:
                                          </label>
                                          <input
                                            type="text"
                                            value={formData.paid_amount}
                                            onChange={handleChangeform}
                                            name="paid_amount"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Paid Amount"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Pending Amount:
                                          </label>
                                          <input
                                            type="text"
                                            value={formData.pending_amount}
                                            onChange={handleChangeform}
                                            name="pending_amount"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Pending Amount"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-8">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Invoice Notes:
                                          </label>
                                          <input
                                            type="text"
                                            value={formData.invoice_detail}
                                            onChange={handleChangeform}
                                            name="invoice_detail"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Invoice Notes"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="form-group">
                                          <button
                                            type="button"
                                            className="btn btn-primary"
                                          >
                                            Add Invoice Image
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <br></br>

                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>{" "}
                                      &nbsp; &nbsp;
                                      <button
                                        type="submit"
                                        className="submit-button btn btn-primary "
                                      >
                                        Add
                                      </button>
                                    </div>
                                  </form>
                                </div>
                                <div
                                  id="second_table"
                                  style={{
                                    display:
                                      activeBtn === "second" ? "table" : "none",
                                  }}
                                  className="col-md-12 "
                                >
                                  <form
                                    onSubmit={handleSubmit}
                                    className="col-md-12 form-sample"
                                  >
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Vendor Number:
                                          </label>
                                          <input
                                            value={formData.Vphone}
                                            onChange={handleChangeform}
                                            type="text"
                                            name="Vphone"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Phone Number"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Vendor Alternate Number:
                                          </label>
                                          <input
                                            value={formData.Alt_phone}
                                            onChange={handleChangeform}
                                            type="text"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Vendor Alternate Number"
                                            name="Alt_phone"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Vendor Name:
                                          </label>
                                          <input
                                            value={formData.Vname}
                                            onChange={handleChangeform}
                                            type="text"
                                            name="Vname"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Vendor Name"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Vendor Email:
                                          </label>
                                          <input
                                            value={formData.Vemail}
                                            onChange={handleChangeform}
                                            type="email"
                                            name="Vemail"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Vendor Email"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Bill Number:
                                          </label>
                                          <input
                                            value={formData.bill_no}
                                            onChange={handleChangeform}
                                            type="text"
                                            name="bill_no"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Bill Number"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Bill Date:
                                          </label>
                                          <input
                                            value={formData.bill_date}
                                            onChange={handleChangeform}
                                            type="date"
                                            name="bill_date"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            GST Number:
                                          </label>
                                          <input
                                            value={formData.gst}
                                            onChange={handleChangeform}
                                            type="text"
                                            name="gst"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="GST Number"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Type of Invoice:
                                          </label>
                                          <input
                                            value={formData.type_invoice}
                                            onChange={handleChangeform}
                                            type="text"
                                            name="type_invoice"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="GST Invoice"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Address:
                                          </label>
                                          <input
                                            value={formData.address}
                                            onChange={handleChangeform}
                                            type="text"
                                            name="address"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Enetr Your Address"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Payment Mode:
                                          </label>
                                          <select
                                            id="cars"
                                            name="pay_mode"
                                            value={formData.pay_mode}
                                            onChange={handleChangeform}
                                            placeholder="Select Payment Mode"
                                            className="form-control form-control-sm"
                                          >
                                            <option value="volvo">
                                              Select Payment Method
                                            </option>
                                            <option value="saab">UPI</option>
                                            <option value="fiat">
                                              Debit Card
                                            </option>
                                            <option value="audi">
                                              Credit Card
                                            </option>
                                            <option value="audi">
                                              Net Banking
                                            </option>
                                          </select>
                                          <label className="form-check-label">
                                            <input
                                              type="checkbox"
                                              className="form-check-input"
                                            />
                                            TCS
                                          </label>
                                          &nbsp;&nbsp;
                                          <label className="form-check-label">
                                            <input
                                              type="checkbox"
                                              className="form-check-input"
                                            />
                                            EMI
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Total Amount:
                                          </label>
                                          <input
                                            value={formData.total_amount}
                                            onChange={handleChangeform}
                                            type="text"
                                            name="total_amount"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Total Amount"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Tax Amount:
                                          </label>
                                          <input
                                            type="text"
                                            name="tax_amount"
                                            value={formData.tax_amount}
                                            onChange={handleChangeform}
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Tax Amount"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Paid Amount:
                                          </label>
                                          <input
                                            type="text"
                                            value={formData.paid_amount}
                                            onChange={handleChangeform}
                                            name="paid_amount"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Paid Amount"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Pending Amount:
                                          </label>
                                          <input
                                            type="text"
                                            value={formData.pending_amount}
                                            onChange={handleChangeform}
                                            name="pending_amount"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Pending Amount"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-8">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputUsername1">
                                            Invoice Notes:
                                          </label>
                                          <input
                                            type="text"
                                            value={formData.invoice_detail}
                                            onChange={handleChangeform}
                                            name="invoice_detail"
                                            className="form-control form-control-sm"
                                            id="exampleInputUsername1"
                                            placeholder="Invoice Notes"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="form-group">
                                          <button
                                            type="button"
                                            className="btn btn-primary"
                                          >
                                            Add Invoice Image
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <br></br>

                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>{" "}
                                      &nbsp; &nbsp;
                                      <button
                                        type="submit"
                                        className="submit-button btn btn-primary"
                                      >
                                        Add
                                      </button>
                                    </div>
                                  </form>
                                </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Add_purchase_invoice;
