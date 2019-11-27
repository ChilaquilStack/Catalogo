import React, {Fragment} from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Products from './components/Products';
import '../node_modules/bulma/css/bulma.min.css';

function App() {

  return (
    
    <Fragment>
      
      <Navbar/>
      
      <Products/>

      <Contact/>
    
    </Fragment>
  
  );

}

export default App;
