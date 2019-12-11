import { GET_TASKS, ADD_TASK, DELETE_TASK, ADD_CALL } from './types';
import axios from 'axios';

export const getTasks = () => async dispatch => {
  const res = await axios.get('/api/task');
  dispatch({
    type: GET_TASKS,
    payload: res.data
  });
};

export const onAddTask = task => async dispatch => {
  const res = await axios.post('/api/task/add', { task });
  console.log('response::', res);
  dispatch({
    type: ADD_TASK,
    payload: res.data
  });
};

export const onDeleteTask = tasks => async dispatch => {
  const res = await axios.post('/api/task/delete', { tasks });
  console.log('response::', res);
  dispatch({
    type: DELETE_TASK
  });
};

export const onAddCall = formData => async dispatch => {
  console.log(formData);
  const res = await axios.post('/api/task/call/add', formData);
  console.log('response::', res);
  dispatch({
    type: ADD_CALL,
    payload: res.data
  });
};
