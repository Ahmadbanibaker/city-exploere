import React, { Component } from 'react'
import Weather2 from './Weather2'
 class Weather extends Component {
    render() {
        return (
           
            <div className='row' style={{ margin: "30px 20px" }}>
          {
          this.props.weatherData.map(value => {
              return <Weather2 date={value.data}   description={value.description}/>
          })
          }
        </div>
        )
    }
}

export default Weather
