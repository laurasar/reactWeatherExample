import React from 'react';
import Days from './Days';
import DetailedForecast from "./DetailedForecast";
import '../css/weather-app.css';


class WeatherApp extends React.Component {
  today(){
    return new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'short',
              day:'numeric'
            })
    }

  cityName(){
    let city = this.props.match.params.weatherId.split('_')
    let capsCity= city.map( item => {
      return item[0].toUpperCase() + item.slice(1,(item.length));
    })
    return capsCity.join(' ');

  }
  render(){
    return(
      <div>
        <Days today= {this.today() } cityState={this.cityName()} />
        <DetailedForecast />
      </div>
    )
  }
}

export default WeatherApp;
