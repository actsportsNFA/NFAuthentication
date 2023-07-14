
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Test from './Pages/Test';
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    const $ = window.$
   
  $("#rts__preloader").fadeOut(1000);
  
   
  
  }, [])
  
  return (
   <>
   <Routes>
    <Route element={<Home/>} path="/"/>
    {/* <Route element={<Test/>} path="/test"/> */}
    
   </Routes>
   </>
  );
}

export default App;
