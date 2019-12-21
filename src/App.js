import React from 'react';
import {start} from './global/axiosInterceptor';
import SignIn from './modules/signin/SignIn';
import SignUp from './modules/signup/SignUp';
import NavBar from './modules/navbar/NavBar';
import Home from './modules/home/Home';
import EditProduct from './modules/admin/editproduct/EditProduct';

start();
const App = () =>  
{
  return (
      <div>
         <NavBar />
      </div>
  );
}

export default App;
