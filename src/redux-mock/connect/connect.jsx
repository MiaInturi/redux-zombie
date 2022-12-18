import React, { useContext, useEffect, useRef, useState } from 'react';

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

    // Need to update ownProps without recall effect
    const ownPropsRef = useRef();
    ownPropsRef.current = ownProps;

    useEffect(() => {
      const unsubscribe = store.subscribe(() => {
        setMappedStateFromProps(mapStateToProps(store.getState(), ownPropsRef.current));
        setMappedFromDispatchProps(mapDispatchToProps(dispatch, ownPropsRef.current));
      });
      return unsubscribe;
    }, []);

    return <Component {...ownProps} {...mappedFromStateProps} {...mappedFromDispatchProps} />;
  };
  ConnectedComponent.DisplayName = Component.DisplayName;
  return ConnectedComponent;
};
