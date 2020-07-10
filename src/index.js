import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import Context from './Context';
// import reducer from './reducers';

// import initialState from './initialState';
import App from './routes/App';

// const store = createStore(reducer, initialState);

ReactDOM.render(
  <Context.Provider>
    <App />
  </Context.Provider>,
  document.getElementById('app'),
);
