import { useEffect, useState } from 'react';
import '../App.css';
// import './Weather.css'
import axios from 'axios';
import ShowTemp from '../ShowTemp';
import Header from '../headerComponent/Header';

function Weather() {
 
  const[city,setCity] = useState();
   const[data, setData] = useState({
    description:"",
     temp:0,
     temp_max:0,
     temp_min:0,
     humidity:0,
     sunrise:0,
     sunset:0,
     country:""
   })
   function isData(){
    return data.description
    }
   
     function handleClick(){
       axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c412e32f8374f6a87ce341d095a159f6`)
        .then((response) => {
          setData({
            description: response.data.weather[0].description,
            temp: response.data.main.temp,
            temp_max: response.data.main.temp_max,
            temp_min:response.data.main.temp_min,
            humidity:response.data.main.humidity,
            sunrise:response.data.sys.sunrise,
            sunset:response.data.sys.sunset,
            country: response.data.sys.country,
          })
          setCity('');
         
         })}
  return (
    <>
    <Header/>
    <h1>Weather App</h1>
    <div className="App">
      
      <input 
      type={"text"} 
      value={city} 
      placeholder={"🌥️ City Name.."}
      onChange={((e)=>setCity(e.target.value))}>
      </input>
      <button onClick={handleClick}>Search</button>
      <ShowTemp text={isData ? data : ""}/>
      </div>
      
    
    </> 
    
  );
}

export default Weather;
