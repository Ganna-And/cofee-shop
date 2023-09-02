import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';

import Home from './pages/home/Home';
import ClerkProviderWithRoutes from './provider/ClerkProvider';


function App() {
  return (
   
    <BrowserRouter>
    <ClerkProviderWithRoutes />
        {/* <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />

          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />  
        </Route>
      </Routes>  */}
    </BrowserRouter>
  );
}

export default App;
