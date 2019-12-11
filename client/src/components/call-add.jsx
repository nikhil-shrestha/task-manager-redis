import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Jumbotron } from 'react-bootstrap';

import { onAddCall } from '../actions/taskAction';

const CallAdd = ({ onAddCall }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    time: ''
  });
  const { name, company, phone, time } = formData;

  const inputChangeHandler = event => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = event => {
    event.preventDefault();
    console.log('submit....');

    onAddCall(formData);
  };
  return (
    <Jumbotron>
      <h3>Edit Next Call</h3>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="contactName">
          <Form.Label>Contact Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Task Name"
            onChange={inputChangeHandler}
            value={name}
          />
        </Form.Group>
        <Form.Group controlId="company">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            name="company"
            placeholder="Company"
            onChange={inputChangeHandler}
            value={company}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={inputChangeHandler}
            value={phone}
          />
        </Form.Group>
        <Form.Group controlId="dateTime">
          <Form.Label>Day {'&'} Time</Form.Label>
          <Form.Control
            type="text"
            name="time"
            placeholder="Time"
            onChange={inputChangeHandler}
            value={time}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Jumbotron>
  );
};

export default connect(null, { onAddCall })(CallAdd);
