import React from 'react';
import './App.css';
import SearchField from "react-search-field";
import FeatherIcon from 'feather-icons-react';

function App() {
  return (
    <div className='weather-box'>
      <div className='weather-header'>
        <h1>Weather App</h1>
      </div>
      <div className='weather-search'>
        <SearchField
          placeholder="Search..."
          onChange={(value)=>{
            console.log(value)
          }}
          searchText="This is initial search text"
          classNames="weather-input"
        />
      </div>
      <div className='weather-cloud'>
        <FeatherIcon icon="cloud-rain" color="white" size="60" />
      </div>

      <div className='weather-city'>
        <h1>Mumbai</h1>
      </div>

      <div className="weather-row">
         <div className="weather-column">
            <FeatherIcon icon="sun" color="white"/>
            <p>Temp: 38 "C</p>
         </div>
         <div className="weather-column">
            <FeatherIcon icon="command" color="white"/>
            <p>Preassure: 3000</p>
         </div>
      </div>

      <div className="weather-row">
         <div className="weather-column">
            <FeatherIcon icon="cloud" color="white"/>
            <p>Humidity: 79</p>
         </div>
         <div className="weather-column">
            <FeatherIcon icon="wind" color="white"/>
            <p>Wind: 3.6</p>
         </div>
      </div>
      
    </div>
  );
}

export default App;
