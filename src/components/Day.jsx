import React from 'react';


class Day extends React.Component {
  render(){
    let weekday= new Date(this.props.day).toLocaleDateString('en-US',{weekday:'long'})
    let datee = new Date(this.props.day).toLocaleDateString('en-US',{month:"short",day:"numeric"})
    let high = this.props.high;
    let low = this.props.low;
    let description = this.props.description;
    let icon= this.props.icon;
    return(
      <div className="day">
        {/* <div className="day-night-info">
          <div className="left-side"> */}
            <h2> { weekday } </h2>
            <h3>{datee}</h3>
            <img src={process.env.PUBLIC_URL + `/weather_icons/${icon}.png`} alt="weather" />
            <div className="degrees">
              <span className="high">{high}&deg;</span>{low}&deg;
            </div>
        <p>{description}</p>
      </div>
    )
  }
}

export default Day;
