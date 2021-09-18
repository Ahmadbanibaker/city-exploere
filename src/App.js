import React, { Component } from 'react';
import Formsearch from './Component/Formsearch';
import Location from './Component/Location';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Movies from './Component/Movies';
import Movie2 from './Component/Movie2';
import Weather from './Component/Weather';


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
      showWeather: false,
      showMovie:[]
    }

  }
  
  handleLocation = (e) => {
    let city_name = e.target.value;
    this.setState({
      city_name: city_name

    })
  }
  handleSubmit =  (e) => {
    e.preventDefault();
    let config = {
      method: "GET",
      baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_KEY}&q=${this.state.city_name}`
    }
    

    axios(config).then(res => {
      let responseData = res.data[0]
      
      this.setState({
        city_name: responseData.display_place,
        lon: responseData.lon,
        lat: responseData.lat,
        type: responseData.type,
        showData: true

      })
    }).then( async ()  =>  {
     try {
       let  weatherRes  = await axios.get(`${process.env.REACT_APP_BK_URL}/weather?key=40b469be84da46abb3eb4e5a66e789ad&lat=${this.state.lat}&lon=${this.state.lon}`)

     this.setState({
       arr: weatherRes.data,
       showWeather: true
     })
    }catch(e){
         console.log(e)
       } 
    })
    .then( async() => {
      const cityName = this.state.city_name;

   try {  
   let movieRes = await  axios.get(`${process.env.REACT_APP_BK_URL}/movie?api_key=74b29308bb70138feec3e94fe656d2a2&query=${cityName}`)
   this.setState({
    showMovie:movieRes.data,
  })
  } catch(e){
        console.log(e)
      }
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to City explorer</h1>
        <Formsearch handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} />
        {
          this.state.showData &&
        <>  <Location city_name={this.state.city_name}
            type={this.state.type}
            lat={this.state.lat}
            lon={this.state.lon}
          />    
          <img alt='asjadj' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.lat},${this.state.lon}`} fluid />
</>
        }
        {
        this.state.showWeather && 
       
           <Weather  weatherData={this.state.arr}  />
                  
        
        }
      <h1>Movie</h1>
          <Movies showMovie={this.state.showMovie}/>
         


      </div>
    )
  }
}
export default App
