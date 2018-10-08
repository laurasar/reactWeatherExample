import React from 'react';
import Day from './Day';
class Days extends React.Component {
  render(){
    return(
      <div>
        <h1>Weather for {this.props.cityState}</h1>
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
      </div>
    )
  }
}

export default Days;
