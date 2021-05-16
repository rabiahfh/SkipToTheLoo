import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Powerslap from "../video/background.mp4"


function Landing(){
    return(
        <section>
            <video
            autoPlay
            loop
            muted
            style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
            }}
            >
            <source src={Powerslap} type="video/mp4" />
            </video>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There! <span className="wave">👋🏻</span>
                </h1>
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Ramya Mariyala</strong>
                </h1>
                <div style={{ padding: 50, textAlign: "left" }}>
                </div>
              </Col>
  
              {/* <Col md={5} style={{ paddingBottom: 40 }}>
                <img src={homeLogo} alt="home pic" className="img-fluid" />
              </Col> */}
            </Row>
          </Container>
        </Container>
        {/* <Home2 /> */}
      </section>
    )
}

export default Landing;
