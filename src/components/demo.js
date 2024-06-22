import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [modelDetails, setModelDetails] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/salesbroz_react_app/api.php')
      .then(response => {
        setBrands(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleBrandSelect = (e) => {
    const brandId = e.target.value;
    const brand = brands.find(b =>{return  b.id === brandId});
    setSelectedBrand(brand);
    setSelectedModel(null);
    setModelDetails({});
    setColors([]);
    if (brandId) {
      axios.get(`http://localhost/salesbroz_react_app/api.php?brand_id=${brandId}`)
        .then(response => {
          setModels(response.data);
        })
        .catch(error => console.error(error));
    } else {
      setModels([]);
    }
  };

  const handleModelSelect = (e) => {
    const modelId = e.target.value;
    const model = models.find(m => m.id === modelId);
    setSelectedModel(model);
    if (modelId) {
      axios.get(`http://localhost/salesbroz_react_app/api.php?model_id=${modelId}`)
        .then(response => {
          const data = response.data;
          setModelDetails(data);
          setColors(data.colors.map(color => ({ ...color, quantity: 0, price: 0 })));
          setShowModal(true);
        })
        .catch(error => console.error(error));
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
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

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Select Brand and Model</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="brand-select" style={{ marginRight: '10px' }}>Select Brand:</label>
        <select id="brand-select" onChange={handleBrandSelect} style={{ padding: '8px', fontSize: '16px' }}>
          <option value="">--Select a Brand--</option>
          {brands.map(brand => (
            <option key={brand.id} value={brand.id}>{brand.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="model-select" style={{ marginRight: '10px' }}>Select Model:</label>
        <select id="model-select" onChange={handleModelSelect} style={{ padding: '8px', fontSize: '16px' }}>
          <option value="">--Select a Model--</option>
          {models.map(model => (
            <option key={model.id} value={model.id}>{model.name}</option>
          ))}
        </select>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Selected Model Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBrand && selectedModel && modelDetails ? (
            <>
              <p><strong>Brand:</strong> {selectedBrand.name}</p>
              <p><strong>Model:</strong> {selectedModel.name}</p>
              <p><strong>HSN:</strong> {modelDetails.hsn}</p>
              <p><strong>Tax Rate:</strong> {modelDetails.tax}%</p>
              <p><strong>Other Detail:</strong> {modelDetails.otherDetail}</p>
              <h3>Colors</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Color</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Price</th>
                    <th>Tax</th>
                    <th>Final Price</th>
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
                            value={color.quantity}
                            onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                            style={{ width: '100px' }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={color.price}
                            onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                            style={{ width: '100px' }}
                          />
                        </td>
                        <td>{totalPrice}</td>
                        <td>{tax}</td>
                        <td>{finalPrice}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          ) : (
            <p>No details available</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
