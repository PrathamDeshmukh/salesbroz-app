

import { Outlet } from 'react-router-dom';
import Header from './header.js';
import Sidebar from './sidebar.js';

function App() {
  return (
   
    

   
      <div className="container-scroller">
        <Header/>
        <div className="container-fluid page-body-wrapper">
          <Sidebar/>
         
         
          <div className="main-panel">
            <div className="content-wrapper">
              <Outlet/>

             
             
            </div>
            
        </div>
   
  </div>
       
      </div>
      
    
  );
}

export default App;
