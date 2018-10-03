import React from 'react';
import '../css/weather-form.css'
class WeatherForm extends React.Component {
  render() {
    return (
      <form action="" className="weather-form">
        <h1 className= "form-title"> Find your local Weather! </h1>
        <div>
          <label hmtlFor= "city"> Enter city, State</label>
          <input type= "text" name= "city" placeholder= "ex. Los Angeles. CA"/>
       </div>
       <footer>
         <input type="Submit" value="Find my weather!" />
       </footer>
      </form>
    )
  }
}
export default WeatherForm;
