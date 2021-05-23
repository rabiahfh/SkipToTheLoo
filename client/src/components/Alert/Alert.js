import React from "react";
import "./style.css";
import { Container, Navbar, Col, Form, FormControl, Button } from "react-bootstrap";
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Alert(props) {
  return (
    <div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>

  );
}
export default Alert;