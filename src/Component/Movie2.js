import React, { Component } from 'react'
import {Card , ListGroup , ListGroupItem , Image} from 'react-bootstrap'

export class Movie2 extends Component {
    render() {
        return (
            <Card className='col-3' style={{ width: '18rem' , height:'25rem' , margin:'20px' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title> {this.props.title} </Card.Title>
              <Image src={this.props.poster_path}  />
              <Card.Text style={{height : '150px' , overflow:'scroll' , padding:'5px'}} >
               { this.props.overview }
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem> Vote Average {this.props.average_votes}</ListGroupItem>
              <ListGroupItem> vote count {this.props.vote_count}</ListGroupItem>
              <ListGroupItem>.release_date {this.props.release_date}</ListGroupItem>
            </ListGroup>
          </Card>
        )
    }
}

export default Movie2
