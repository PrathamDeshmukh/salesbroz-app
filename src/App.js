

import Login from './components/login.js';
import Signup from './components/signup.js';

import Home from './components/home.js';
import My_employee from './components/my_employee.js';
import My_sales from './components/my_sales.js';
import My_purchase from './components/my_purchase.js';
import Invoice from './components/invoice.js';
import Sale_invoice from './components/sale_invoice.js';
import Purchase_invoice from './components/purchase_invoice.js';
import Invoice_setting from './components/invoice_setting.js';
import Ledger from './components/ledger.js';
import IMEI_tracker from './components/imei_tracker.js';
import Sales_return from './components/sales_return.js';
import Purchase_return from './components/purchase_return.js';
import My_customer from './components/my_customer.js';
import My_distributor from './components/my_distributor.js';
import Scheme_dashboard from './components/scheme_dashboard.js';
import Add_your_scheme from './components/add_your_scheme.js';
import My_earnings from './components/my_earnings.js';
import Template from './components/template';
import Retailer_profile from './components/retailer_profile.js';
import My_stock from './components/my_stock.js';
import Stock_Audit from './components/stock_audit.js';
import Add_your_model from './components/add_your_model.js';
import Logout from './components/logout.js';
import ProfileGuard from './components/ProfileGuard.js';

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
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Routes>
        {/* This route is for home component with exact path "/", in component props we passes the imported component*/}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Template />} >
        <Route path="/My_Profile" element={<Retailer_profile/>} />
          <Route index element={ <ProfileGuard> <Home /> </ProfileGuard> } />
          <Route path="/my_stock" element={ <ProfileGuard> <My_stock /> </ProfileGuard> } />
          <Route path="/stock_audit" element={ <ProfileGuard> <Stock_Audit /> </ProfileGuard> } />
          <Route path="/add_model" element={ <ProfileGuard> <Add_your_model /> </ProfileGuard> } />
          

          <Route path="/my_employee" element={ <ProfileGuard> <My_employee /> </ProfileGuard> } />


          
          <Route path="/my_sales" element={ <ProfileGuard> <My_sales /> </ProfileGuard> } />
          <Route path="/my_purchase" element={ <ProfileGuard> <My_purchase /> </ProfileGuard> } />
          <Route path="/invoice" element={ <ProfileGuard> <Invoice /> </ProfileGuard> } />
          <Route path="/sale_invoice" element={ <ProfileGuard> <Sale_invoice /> </ProfileGuard> } />
          <Route path="/purchase_invoice" element={ <ProfileGuard> <Purchase_invoice /> </ProfileGuard> } />
          <Route path="/invoice_setting" element={ <ProfileGuard> <Invoice_setting /> </ProfileGuard> } />
          <Route path="/ledger" element={ <ProfileGuard> <Ledger /> </ProfileGuard> } />
          <Route path="/imei_tracker" element={ <ProfileGuard> <IMEI_tracker /> </ProfileGuard> } />
          <Route path="/sales_return" element={ <ProfileGuard> <Sales_return /> </ProfileGuard> } />
          <Route path="/purchase_return" element={ <ProfileGuard> <Purchase_return /> </ProfileGuard> } />
          <Route path="/my_customer" element={ <ProfileGuard> <My_customer /> </ProfileGuard> } />
          <Route path="/my_distributor" element={ <ProfileGuard> <My_distributor /> </ProfileGuard> }/>
          <Route path="/scheme_dashboard" element={ <ProfileGuard> <Scheme_dashboard /> </ProfileGuard> } />
          <Route path="/add_your_scheme" element={ <ProfileGuard> <Add_your_scheme /> </ProfileGuard> } />
          <Route path="/my_earnings" element={ <ProfileGuard> <My_earnings /> </ProfileGuard> }/>
          <Route path="/logout" element={<Logout />} />
         
        </Route>


      </Routes>
    </BrowserRouter>



  );
}

export default App;
