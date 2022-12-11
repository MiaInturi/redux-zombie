export const createStore = (reducer, initialStore = {}) => {
  // Use 'Observable' pattern for changing of 'store'
  const store = initialStore;
  const listeners = [];

  return {
    getState: () => {
      return store;
    },
    dispatch: (action) => {
      reducer(action);
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
