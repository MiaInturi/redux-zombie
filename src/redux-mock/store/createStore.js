export const createStore = (reducer, initialState = {}) => {
  // Use 'Observable' pattern for changing of 'state'
  let state = initialState;
  const listeners = [];

  return {
    getState: () => {
      return state;
    },
    dispatch: (action) => {
      state = reducer(state, action);
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
