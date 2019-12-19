import React from 'react';

import './App.css';
import SignIn from './modules/signin/SignIn';
import SignUp from './modules/signup/SignUp';
import NavBar from './modules/navbar/NavBar';
import Home from './modules/home/Home';
import EditProduct from './modules/admin/editproduct/EditProduct';
const App = () =>  
{
  return (
      <div>
        <EditProduct/>
   
      </div>
  );
}

export default App;
