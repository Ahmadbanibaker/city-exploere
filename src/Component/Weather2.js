import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
class Weather2 extends Component {
    render() {
        return (
            <div className='col-2' style={{ margin: "30px 20px" }}>
            <Card style={{ width: '18rem' }}>
                <Card.Title>{this.props.cityName}</Card.Title>
                <Card.Body>
                    <Card.Text>
                        <strong>Date</strong> {this.props.date}
                    </Card.Text>

                    <Card.Text>
                        <strong>Weather Description</strong> <br />
                        {this.props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        )
    }
}

export default Weather2
