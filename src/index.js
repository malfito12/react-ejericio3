import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './Components/App';
import store from './Components/Redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App  />
  </Provider>
    ,
  document.getElementById('root')
);

