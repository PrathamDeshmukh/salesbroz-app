import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost/salesbroz_react_app/api.php')
      .then(response => {
        setBrands(response.data);
        // console.log(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleBrandSelect = (e) => {
    const brandId = e.target.value;
  //  console.log(brandId);
  //  console.log(brands);
  const brand = brands.find(b =>{return  b.id == brandId});
 
    setSelectedBrand(brand);
    //  console.log(brand);
    setSelectedModel(null);
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

  const handleModelSelect = (e) => {
    const modelId = e.target.value;
    const model = models.find(m => m.id == modelId);
    setSelectedModel(model);
    // console.log(model)
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <h1>Select Brand and Model</h1>
      
      <div>
        <label htmlFor="brand-select">Select Brand:</label>
        <select id="brand-select" onChange={handleBrandSelect}>
          <option value="">--Select a Brand--</option>
          {brands.map(brand => (
            <option key={brand.id} value={brand.id}>{brand.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="model-select">Select Model:</label>
        <select id="model-select" onChange={handleModelSelect}>
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
           
        {selectedBrand && selectedModel ? (
            <>
              <p><strong>Brand:</strong> {selectedBrand.name}</p>
              <p><strong>Model:</strong> {selectedModel.name}</p>
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
