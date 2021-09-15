import React, { Component } from 'react';
import Formsearch from './Component/Formsearch';
import Location from './Component/Location';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city_name: "",
      type: "",
      lat: "",
      lon: "",
      showData: false,
      arr: [],
      showWeather: false
    }
  }
  handleLocation = (e) => {
    let city_name = e.target.value;
    this.setState({
      city_name: city_name

    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let config = {
      method: "GET",
      baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_KEY}&q=${this.state.city_name}`
    }
    axios(config).then(res => {
      let responseData = res.data[0]
      console.log(responseData)
      this.setState({
        city_name: responseData.display_place,
        lon: responseData.lon,
        lat: responseData.lat,
        type: responseData.type,
        showData: true

      })
    }).then(() => {

      axios.get(`http://${process.env.REACT_APP_BK_URL}/weather?searchQuery=${this.state.city_name}&lat=${this.state.lat}&lon=${this.state.lon}`)
        .then(res => {
          this.setState({
            arr: res.data,
            showWeather: true
          })
          console.log(this.state.arr)
        })
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to City explorer</h1>
        <Formsearch handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} />
        {
          this.state.showData &&
          <Location city_name={this.state.city_name}
            type={this.state.type}
            lat={this.state.lat}
            lon={this.state.lon}
          />
        }
        <img alt='asjadj' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.lat},${this.state.lon}`} fluid />
        {this.state.showWeather && this.state.arr.map(value => {
          return < h2>date={value.date}
            description={value.description}</h2>
        }
        )}

      </div>
    )
  }
}
export default App
