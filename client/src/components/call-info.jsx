import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';

const CallInfo = ({ task: { call } }) => {
  return (
    <Jumbotron>
      <h3>Next Business Call</h3>
      Name: {call.name} <br />
      Company: {call.company} <br />
      Phone: {call.phone} <br />
      Time: {call.time}
    </Jumbotron>
  );
};

const mapStateToProps = state => ({
  task: state.task
});

export default connect(mapStateToProps)(CallInfo);
