import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
 class Weather extends Component {
    render() {
        return (
            <div className='col' style={{ margin: "30px 20px" }}>
            <Card style={{ width: '18rem' }}>
                <Card.Title>{this.props.cityName}</Card.Title>
                <Card.Body>
                    <Card.Text>
                        <strong>Date</strong> {this.props.valid_date}
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

export default Weather
