import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const UserWeather = ({ city }) => {
    useEffect(() => {
        // Keep tracking The City
    }, [city])
    const renderWeather = () => {
        if (city) {
            return (
                <Col>
                    <h5>Your Current City Weather</h5>
                    <hr className="bg-white" />
                    <img
                        src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                        style={{ width: 150, height: 150 }}
                        alt={city.weather[0].icon}
                    />
                    <p className="font-weight-bold">{city.name}, {city.sys.country}</p>
                    <h6 className="text-uppercase">{city.weather[0].main}</h6>
                    <p className="font-weight-bold" style={{ fontSize: "2rem" }}>{parseInt(city.main.temp)}&#176;</p>
                    <p>
                        <span className="mx-2">{parseInt(city.main.temp_max)}&#176;</span>
                        <span className="mx-2">{parseInt(city.main.temp_min)}&#176;</span>
                    </p>
                    <p className="text-capitalize">{city.weather[0].description}</p>
                </Col>
            )
        }
        return (
            <p>Loading ...</p>
        )
    }
    return (
        <Container fluid>
            <Row className="text-center">
                {renderWeather()}
            </Row>
            <Row>
                <Col>
                    <p className="warning text-center">
                        You Can Check Any Other City in The World By it's Name <Link to="/weather" className="text-primary">Here</Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default UserWeather;
