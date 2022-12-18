import { ACTION_TYPES } from '../actions/actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.DELETE: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    }
    default: {
      return state;
    }
  }
};
