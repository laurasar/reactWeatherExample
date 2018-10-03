import React from 'react';
import Days from './Days';
import DetailedForecast from "./DetailedForecast";

class WeatherApp extends React.Component {
  render(){
    return(
      <div>
        <Days />
        <DetailedForecast /> 
      </div>
    )
  }
}

export default WeatherApp;
