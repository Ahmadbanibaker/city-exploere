import React, { Component } from 'react'
import {Form,Button} from "react-bootstrap"
 class Formsearch extends Component {
    render() {
        return (

          <Form onSubmit={this.props.handleSubmit}>
             <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="search for location" 
            onChange={this.props.handleLocation}/>
          <Button variant="primary" type="submit">
            explore
          </Button>
          </Form.Group>
        </Form>

        )
    }
}

export default Formsearch
