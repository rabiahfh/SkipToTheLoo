import React from "react";
import { Container, Row, Col, Form, FormControl, Button } from "react-bootstrap";
import './Landing.scss';
import Powerslap from "../video/background.mp4";
import Map from "../components/Map";

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
            <h1> SKIP TO THE LOO <span className="wave">🚻</span> </h1>
              <p>Feeling Full, need to empty ? <strong>
              <span className="wave">🧻</span></strong></p>
              <Form inline>
              <FormControl type="text" placeholder="Search for Loo" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
              </Form>  
              <Map />
            </Container>
      </section>
    )
}

export default Landing;
