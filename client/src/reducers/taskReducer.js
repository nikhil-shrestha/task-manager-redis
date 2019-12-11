import { GET_TASKS, ADD_TASK, DELETE_TASK, ADD_CALL } from '../actions/types';

const initialState = {
  tasks: [],
  call: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  console.log('payload::', payload);
  switch (type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: payload.tasks,
        call: payload.call
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload]
      };

    case ADD_CALL:
      return {
        ...state,
        call: payload
      };

    case DELETE_TASK:
      return {
        ...state
      };

    default:
      return state;
  }
}
