import { createStore } from './createStore';
import { reducer } from '../reducer/reducer';

const INITIAL_STATE = {
  todos: [
    { id: 0, description: 'description_0' },
    { id: 1, description: 'description_1' }
  ]
};

export const initializeStore = () => {
  return createStore(reducer, INITIAL_STATE);
};
