import React, { Component } from 'react'
import {Form,Button} from "react-bootstrap"
 class Formsearch extends Component {
    render() {
        return (

          <Form className='col-6' onSubmit={this.props.handleSubmit}>
             <Form.Group className="row" controlId="formBasicEmail">
            <Form.Control className='col' type="text" placeholder="search for location" 
            onChange={this.props.handleLocation}/>
          <Button className='col-2' variant="primary" type="submit">
            explore
          </Button>
          </Form.Group>
        </Form>

        )
    }
}

export default Formsearch
