import React, { Component } from 'react'
import Movie2 from './Movie2'
 class Movies extends Component {
    render() {
       let MovieData= this.props.showMovie;
         return (

            <div className='row'>
         { MovieData.map(m =>{
            return <Movie2 title={m.title}  overview ={m.overview} average_votes={m.average_votes} vote_count={m.total_votes} poster_path={m.poster_path} release_date={m.released_on}/>} )}</div>
          )
        
    }
}

export default Movies
