import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export const MainSection = () => {

  return (
    <main>
      <section className="mainBanner">
        <Container>
          <Row className="justify-content-center align-item-center">
            <Col md={12}>
              <div>
                <h1 className="mainText">Modern · Natural · Bright</h1>
              </div>
            </Col>
            <Col sm={12} md={10} lg={9}>
              <div className="horizontalLine"></div>
            </Col>
            <Col md={12}>
              <div>
                <p>Lifestyle family portraits</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}