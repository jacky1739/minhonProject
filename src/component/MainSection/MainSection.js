import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export const MainSection = () => {

  return (
    <main>
      <section className="mainBanner">
        <Container>
          <Row className="justify-content-center align-item-center">
            <Col md={12}>
              <h1 className="mainText">Modern · Natural · Bright</h1>
            </Col>
            <Col sm={12} md={10} lg={9}>
              <div className="horizontalLine"></div>
            </Col>
            <Col md={12}>
              <p>Lifestyle family portraits</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col md={6}>
              <h2>TORONTO WEDDING PHOTOGRAPHERS: OUR MISSION + PHILOSOPHY</h2>
              <div></div>
              <h2>REAL EMOTIONS, REAL CONNECTION + REAL PEOPLE</h2>
            </Col>
            <Col md={6}>
              <p>We are the Toronto wedding photographers who embrace and celebrate the non-traditional and who
              capture actions, reactions, emotions, and connections.</p>
              <p>We say “no” to cookie-cutter poses and instead, we learn what’s most important for you and gain inspiration from your excitement. We believe weddings are about moments and connections, not about the grandeur or centerpieces of forced smiles. Our job is to capture you, your partner, your friends, and your family as naturally as possible.</p>
              <p>There is no right or wrong way to get married, and we strive to capture photos that are as unique and authentic as your relationship is.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}