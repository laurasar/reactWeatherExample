import React from 'react';
import Day from './Day';
class Days extends React.Component {
  render(){
    return(
      <div>
        <h1>Weather for {this.props.cityState}</h1>
        <div className="days">
          {this.props.data.city.map( (elem, i) => {
            return (
              <Day
                day= {elem.dt}
                high= {elem.temp_max}
                low={elem.temp_min}
                description= {elem.description}
                icon = {elem.icon}/>
              )
            })}
          </div>
        </div>
      )


    }
  }

  export default Days;
