import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from './redux-mock/Provider/Provider';
import { initializeStore } from './redux-mock/store/initializeStore';
import { TodoList } from './components/TodoList/TodoList';

const store = initializeStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoList />
    </Provider>
  </React.StrictMode>
);
