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
    </div>
  );
}

export default App;
