import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { UserWeather } from '../components';
import axios from 'axios';

const HomePage = () => {
    const [city, setCity] = useState(null)
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)
    useEffect(() => {
        (() => {
            navigator.geolocation.getCurrentPosition(position => {
                setLat(position.coords.latitude)
                setLong(position.coords.longitude)
            })
        })()
        const getCurrentCity = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=ff07332bf12d3744e1691a3180ed0b97`
            const response = await axios.get(url)
            setCity(response.data)
        }
        getCurrentCity()
    }, [long, lat])
    return (
        <Fragment>
            <Container fluid>
                <Row className="py-2">
                    <Col className="text-center">
                        <h1 className="mt-5 mb-2">Hello & Welcome in Weather App</h1>
                        <p>You Can Check Your Weather in Your City Here or/and Any Other City in The World</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <UserWeather city={city} />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default HomePage;
