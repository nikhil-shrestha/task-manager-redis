import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Form, Button } from 'react-bootstrap';

import { onDeleteTask } from '../actions/taskAction';

const DeleteTask = ({ branding, task: { tasks }, onDeleteTask }) => {
  const [fields, setFields] = useState([]);

  const changeCheckBoxFields = (item, index) => {
    let newState = fields;
    newState[index] = {
      check: !newState[index],
      data: item
    };
    setFields(newState);
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log('fields::', fields);
    const tasks = fields.filter(task => task.check).map(obj => obj.data);
    console.log('tasks::', tasks);
    onDeleteTask(tasks);
  };

  return (
    <Card body className="my-4">
      <h3>{branding}</h3>
      <Form onSubmit={submitHandler}>
        <ul className="task-list">
          {tasks.length > 0 &&
            tasks.map((task, index) => (
              <li>
                <label>
                  <input
                    type="checkbox"
                    name="tasks"
                    className="del"
                    onChange={() => changeCheckBoxFields(task, index)}
                    value="<%= task %>"
                  />{' '}
                  <span>{task}</span>
                </label>
              </li>
            ))}
        </ul>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};

DeleteTask.defaultProps = {
  branding: 'Task List'
};

DeleteTask.propTypes = {
  branding: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  task: state.task
});

export default connect(mapStateToProps, { onDeleteTask })(DeleteTask);
