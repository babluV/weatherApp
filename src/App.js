import { useEffect, useState } from 'react';
import './App.css';
import Weather from './WeatherComponent/Weather';
import { Route,Routes} from 'react-router-dom'
import Login from './headerComponent/Login';
import SignUpp from './headerComponent/SignUp';


function App() {
 

   return (
     <>
      <Routes>
  
        
  <Route path="/login" element={<Login/>}/>
  <Route path="/" element={<SignUpp/>} /> 
  <Route  path="/weather" element={<Weather/>}/>
  
   
 
</Routes>
    </> 
    
  );
}

export default App;
