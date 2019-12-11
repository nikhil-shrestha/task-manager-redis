import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Card, Form, Button } from 'react-bootstrap';

import { onAddTask } from '../actions/taskAction';

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState('');

  return (
    <Card body className="mt-5">
      <Form
        onSubmit={e => {
          e.preventDefault();
          onAddTask(text);
          setText('');
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Add Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add Task"
            name="task"
            onChange={e => setText(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default connect(null, { onAddTask })(AddTask);
