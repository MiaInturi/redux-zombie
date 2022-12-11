import React from 'react';

const ReduxContext = React.createContext({});

export const Provider = ({ store, children }) => {
  return <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>;
};
