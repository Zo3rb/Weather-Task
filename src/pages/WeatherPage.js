import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import axios from 'axios';

const WeatherPage = () => {

    // Declaring Two States One For on-Time Changing State With Input Field And The Other to Search With to Avoid Searching Every Time The Input being Changed
    const [selectedCity, setSelectedCity] = useState("");
    const [respond, setRespond] = useState("");

    // Searching Method Handler With The City (The Respond State) After User Submitting
    const fetchSearched = async city => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ff07332bf12d3744e1691a3180ed0b97`
        const response = await axios.get(url);
        return setRespond(response.data);
    }

    // After The User Submit The Form WE Do Side Effect as a Call back in The Submit Handler
    const onSubmitHandler = e => {
        e.preventDefault();
        fetchSearched(selectedCity)
        setSelectedCity("");
    }

    // RenderHelper Method >> Always Keeping The JSX Looks Cleaner
    const renderSelectedCityWeather = () => {
        // Return Nothing if There's No Respond or User Miss Spelled
        if (!respond) {
            return null
        }
        // The Actual UI That Will be Rendered
        return (
            <Col>
                <h5>Your Searched City Weather</h5>
                <hr className="bg-white" />
                <img
                    src={`http://openweathermap.org/img/wn/${respond.weather[0].icon}@2x.png`}
                    style={{ width: 150, height: 150 }}
                    alt={respond.weather[0].icon}
                />
                <p className="font-weight-bold">{respond.name}, {respond.sys.country}</p>
                <h6 className="text-uppercase">{respond.weather[0].main}</h6>
                <p className="font-weight-bold" style={{ fontSize: "2rem" }}>{parseInt(respond.main.temp)}&#176;</p>
                <p>
                    <span className="mx-2">{parseInt(respond.main.temp_max)}&#176;</span>
                    <span className="mx-2">{parseInt(respond.main.temp_min)}&#176;</span>
                </p>
                <p className="text-capitalize">{respond.weather[0].description}</p>
            </Col>
        )
    }

    return (
        // Reactstrap Markup (Form And the Helper Method)
        <Container fluid>
            <Row className="py-1">
                <Col className="text-center">
                    <h4>Just Type The City Name</h4>
                    <p className="text-muted">You Must Spelling Correctly</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form inline onSubmit={onSubmitHandler}>
                        <FormGroup className="mx-auto w-75">
                            <Input
                                className="w-75 my-2 rounded-0"
                                type="text" name="text"
                                placeholder="Example: Cairo"
                                autoComplete="off"
                                value={selectedCity}
                                onChange={e => setSelectedCity(e.target.value)}
                            />
                            <Button
                                className="w-25 my-2 rounded-0"
                                color="primary"
                                type="submit"
                                disabled={!selectedCity}
                            >
                                Find
                            </Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
            <Row className="text-center p2-5">
                {renderSelectedCityWeather()}
            </Row>
        </Container>
    );
}

export default WeatherPage;
