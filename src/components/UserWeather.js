import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const UserWeather = ({ city }) => {

    useEffect(() => {
        // As we Mentioned That The Root Page Will Re-render Several Times Before Finish Fetching The Location of The User , So We have To Watch This Property (City)
    }, [city])

    const renderWeather = () => {
        // Every Time City Changes it Render Different City Dynamically
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
        // Could Replace it With GIF Later :)
        return (
            <p>Loading ...</p>
        )
    }

    return (
        <Container fluid>
            <Row className="text-center">
                {/* Get The Final Rendered City and Inject it Here With The Helper Method */}
                {renderWeather()}
            </Row>
            <Row>
                <Col>
                    {/* Costume Weather Search With City Name */}
                    <p className="warning text-center">
                        You Can Check Any Other City in The World By it's Name <Link to="/weather" className="text-primary">Here</Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default UserWeather;
