import React, { useContext, useEffect, useState } from 'react';

import { StoreContext } from '../Provider/Provider';

export const connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
  const ConnectedComponent = (ownProps) => {
    const store = useContext(StoreContext);
    const { dispatch } = store;

    const [mappedFromStateProps, setMappedStateFromProps] = useState(() => {
      return mapStateToProps(store.getState(), ownProps);
    });
    const [mappedFromDispatchProps, setMappedFromDispatchProps] = useState(() => {
      return mapDispatchToProps(dispatch, ownProps);
    });

    useEffect(() => {
      const unsubscribe = store.subscribe(() => {
        console.log('HERE', store.getState());
        setMappedStateFromProps(mapStateToProps(store.getState(), ownProps));
        setMappedFromDispatchProps(mapDispatchToProps(dispatch, ownProps));
      });
      return unsubscribe;
    }, []);

    return <Component {...ownProps} {...mappedFromStateProps} {...mappedFromDispatchProps} />;
  };
  ConnectedComponent.DisplayName = Component.DisplayName;
  return ConnectedComponent;
};
