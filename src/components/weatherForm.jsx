import React from 'react';
import '../css/weather-form.css'

class WeatherForm extends React.Component {

  getWeather(event) {
    event.preventDefault();
    const weatherId= this.weatherFormInput.value.replace(/\s/g,"_").toLowerCase();
    let path = `/weather/${weatherId}`;
    this.props.history.push(path);
  }

  render() {
    return (
      <form action="" className="weather-form" onSubmit={e => this.getWeather(e)} >
        <h1 className= "form-title"> Find your local Weather! </h1>
        <div>
          <label htmlFor= "city"> Enter city, State</label>
          <input type= "text" name= "city" placeholder= "ex. Los Angeles. CA" ref={(input) => {this.weatherFormInput = input}
          }/>
       </div>
       <footer>
         <input type="Submit" value="Find my weather!"  />
       </footer>
      </form>
    )
  }
}
export default WeatherForm;
