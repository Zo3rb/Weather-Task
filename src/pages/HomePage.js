import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { UserWeather } from '../components';
import axios from 'axios';

const HomePage = () => {
    // Declaring The Root Page States (City of The user by => Latitude & Longitude of Geolocation)
    const [city, setCity] = useState(null)
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)
    // Once The App Load Successfully => Get Location of The User and Fetch its Weather
    useEffect(() => {
        (() => {
            navigator.geolocation.getCurrentPosition(position => {
                setLat(position.coords.latitude)
                setLong(position.coords.longitude)
            })
        })()
        const getCurrentCity = async () => {
            const url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=ff07332bf12d3744e1691a3180ed0b97`
            const response = await axios.get(url)
            setCity(response.data)
        }
        getCurrentCity()
        // Every Time Location Of The User Changed it Fetch New Data That's Because The Geolocation API Of The Browser Catch Latitude First > Then Longitude > That'll cause The Root Page ReRender 3 Times 
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
                        {/* Passing The Fetched Weather By The Location to UserWeather Component */}
                        <UserWeather city={city} />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default HomePage;
