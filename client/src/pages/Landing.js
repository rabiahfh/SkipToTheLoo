import React from "react";
import { Container, Row, Col, Form, FormControl, Button } from "react-bootstrap";
import './Landing.scss';
import Powerslap from "../video/background.mp4"


function Landing(){
    return(
        <section >
            <Container className="hero-container">
            <video
            autoPlay
            loop
            muted
            >
            <source src={Powerslap} type="video/mp4" />
            </video> 
            <h1>Feeling Full, need to empty ? <strong>
              <span className="wave">🧻</span></strong> </h1>
              <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
              </Form>  
            
            </Container>


        {/* <Container fluid className="home-section" id="home">
          <Container className="home-content hero-container">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                <strong className="main-name"> Feeling Full, need to empty ? <span className="wave">🧻</span></strong>
                </h1>
                <div style={{ padding: 50, textAlign: "center" }}>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>  */}
      </section>
    )
}

export default Landing;
