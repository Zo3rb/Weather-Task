import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import AppRouter from './routers/AppRouter';
import { Navbar } from './components';
import "./styles/base.scss";

function App() {
  return (
    <Fragment>
      <Container fluid>
        <Row className="py-3">
          <Col
            xs={{ size: 12, order: 1 }}
            md={{ size: 1, order: 2 }}
            className="text-md-center"
          >
            <Navbar />
          </Col>
          <Col
            xs={{ size: 12, order: 2 }}
            md={{ size: 11, order: 1 }}
          >
            <AppRouter />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
