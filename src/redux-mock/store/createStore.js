export const createStore = (reducer, initialState = {}) => {
  // Use 'Observable' pattern for changing of 'state'
  const state = initialState;
  const listeners = [];

  return {
    getState: () => {
      return state;
    },
    dispatch: (action) => {
      reducer(state, action);
      listeners.forEach((listener) => listener());
    },
    subscribe: (listener) => {
      listeners.push(listener);

      const unsubscribe = () => {
        const listenerIndex = listeners.indexOf(listener);
        listeners.splice(listenerIndex, 1);
      };
      return unsubscribe;
    }
  };
};
