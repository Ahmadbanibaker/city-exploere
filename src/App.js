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
      showData: false
    }
  }
  handleLocation = (e) => {
    let city_name = e.target.value;
    this.setState({
      city_name: city_name
    })
  }
  handleSubmit = (e) => {
    console.log(`${process.env.REACT_APP_KEY}`);
    e.preventDefault();
    let config = {
      method: "GET",
      baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_KEY}&q=${this.state.city_name}`
    }
    axios(config).then(res => {
      let responseData = res.data[0]
      this.setState({
        city_name: responseData.display_name,
        lon: responseData.lon,
        lat: responseData.lat,
        type: responseData.type,
        showData: true

      })
    })
  }
  render() {
    return (
      <div className="App">
      <h1>Welcome to City explorer</h1>
      <Formsearch handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} />
      <Location />
    </div>
  );

}
}
export default App
  