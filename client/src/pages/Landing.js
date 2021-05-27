// import React from "react";
// import { Container, Row, Col, Form, FormControl, Button } from "react-bootstrap";
// import './Landing.scss';
// import Powerslap from "../video/background.mp4";
// import Map from "../components/Map";

// function Landing(){
//     return(
//         <section >
//             <Container className="hero-container">
//             <video
//             autoPlay
//             loop
//             muted
//             >
//             <source src={Powerslap} type="video/mp4" />
//             </video> 
//             <h1> SKIP TO THE LOO <span className="wave">🚻</span> </h1>
//               <p>Feeling Full, need to empty ? <strong>
//               <span className="wave">🧻</span></strong></p>
//               <Form inline>
//               <FormControl type="text" placeholder="Search for Loo" className="mr-sm-2" />
//               <Button variant="outline-light">Search</Button>
//               </Form>  
//               <Map />
//             </Container>
//       </section>
//     )
// }

// export default Landing;

import React, { useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./Landing.scss";
import Powerslap from "../video/background.mp4";
import Map from "../components/Map/index.js";
import API from "../utils/API";

function Landing() {
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState(40.78);
  const [long, setLong] = useState(-73.96);
  // const addressSearch = useRef();
  const [addressSearch, setAddressSearch] = useState("");
  const [viewport, setViewport] = useState({
    latitude: 40.78,
    longitude: -73.96,
    zoom: 12,
  });

  function updateAddress(event) {
    setAddressSearch(event.target.value);
  }

  // function updateViewport() {
  //   (viewport) => setViewport({ viewport });
  // }

  function searchMap(event) {
    event.preventDefault();

    console.log("search");
    let currentAddress = addressSearch;
    // replace spaces with % signs in address
    let formattedAddress = currentAddress.replace(/\s/g, "%20");
    let lat;
    let long;

    API.getCoords(formattedAddress).then((response) => {
      let coordsArray = response.data.features[0].center;
      lat = coordsArray[1];
      long = coordsArray[0];

      console.log(currentAddress, lat, long);

      setViewport({
        latitude: lat,
        longitude: long,
        zoom: 12,
      });
    });
  }

  return (
    <section>
      <Container className="hero-container">
        <video autoPlay loop muted>
          <source src={Powerslap} type="video/mp4" />
        </video>
        <h1 className="mt-3">
          {" "}
          SKIP TO THE LOO <span className="wave">🚻</span>{" "}
        </h1>
        <p>
          Feeling Full, need to empty ?{" "}
          <strong>
            <span className="wave">🧻</span>
          </strong>
        </p>
        {/* <Form inline>
          <FormControl
            ref={addressSearch}
            type="text"
            placeholder="Search for Loo"
            className="mr-sm-2"
          />
          <Button onClick={searchMap} variant="outline-light">
            Search
          </Button>
        </Form> */}
        <Map
          address={address}
          viewport={viewport}
          searchMap={searchMap}
          updateAddress={updateAddress}
        />
      </Container>
    </section>
  );
}

export default Landing;

