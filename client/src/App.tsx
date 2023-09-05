import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import ClerkProviderWithRoutes from './provider/ClerkProvider';
import Home from './pages/home/Home';
import Layout from './pages/Layout';
import Head from './pages/header/Head';
import { SignOutButton } from './SignOutBtn';




function App() {
  
  return (  
    <div>Hi</div>
    /* <BrowserRouter>
    <ClerkProviderWithRoutes />
   
        <Routes>
         <Route path="/" element={<Home />}>
           <Route index element={} />

          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />  
        </Route>
      </Routes> 
    </BrowserRouter> */ 
  );
}

export default App;
