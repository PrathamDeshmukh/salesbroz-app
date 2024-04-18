
import Header from './header.js';
import Sidebar from './sidebar.js';
import Home from './home.js';
import My_employee from './my_employee.js';
import My_sales from './my_sales.js';
import My_purchase from './my_purchase.js';
import Invoice from './invoice.js';
import Sale_invoice from './sale_invoice.js';
import Purchase_invoice from './purchase_invoice.js';
import Invoice_setting from './invoice_setting.js';
import Sales_return from './sales_return.js';
import Purchase_return from './purchase_return.js';
import My_customer from './my_customer.js';
import My_distributor from './my_distributor.js';
import Scheme_dashboard from './scheme_dashboard.js';
import Add_your_scheme from './add_your_scheme.js';
import My_earnings from './my_earnings.js';

import { BrowserRouter } from 'react-router-dom';
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    
    
      <div className="container-scroller">
        <Header/>
        <div className="container-fluid page-body-wrapper">
          <Sidebar/>
          <div className="main-panel">
            <div className="content-wrapper">
              {/* This is the alias of BrowserRouter i.e. Router */}
              <Routes>
                {/* This route is for home component with exact path "/", in component props we passes the imported component*/}
                    <Route exact path="/" element={<Home />} />
                    <Route path="/my_employee" element={<My_employee />} />
                    <Route path="/my_sales" element={<My_sales />} />
                    <Route path="/my_purchase" element={<My_purchase />} />
                    <Route path="/invoice" element={<Invoice />} />
                    <Route path="/sale_invoice" element={<Sale_invoice />} />
                    <Route path="/purchase_invoice" element={<Purchase_invoice />} />
                    <Route path="/invoice_setting" element={<Invoice_setting />} />
                    <Route path="/sales_return" element={<Sales_return />} />
                    <Route path="/purchase_return" element={<Purchase_return />} />
                    <Route path="/my_customer" element={<My_customer />} />
                    <Route path="/my_distributor" element={<My_distributor />} />
                    <Route path="/scheme_dashboard" element={<Scheme_dashboard />} />
                    <Route path="/add_your_scheme" element={<Add_your_scheme />} />
                    <Route path="/my_earnings" element={<My_earnings />} />
 
 
                </Routes>
            
                

             
             
            </div>
            
        </div>
   
  </div>
       
      </div>
      </BrowserRouter>
     
    
  );
}

export default App;
