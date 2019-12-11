import React from 'react';
import { Navbar } from 'react-bootstrap';

function header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Redis Task</Navbar.Brand>
    </Navbar>
  );
}

export default header;
