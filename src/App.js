
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

import { useEffect } from 'react';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsCondition from './Pages/TermsCondition';
// import Test from './Pages/Test';

function App() {
  
  useEffect(() => {
    const $ = window.$
   
  $("#rts__preloader").fadeOut(1000);
  
   
  
  }, [])
  
  return (
   <>
   <Routes>
    <Route element={<Home/>} path="/"/>
    <Route element={<PrivacyPolicy/>} path="/privacy-policy"/>
    <Route element={<TermsCondition/>} path="/terms-condition"/>
    {/* <Route element={<Test/>} path="/test"/> */}
    {/* <Route element={<Test/>} path="/test"/> */}
    
   </Routes>
   </>
  );
}

export default App;
