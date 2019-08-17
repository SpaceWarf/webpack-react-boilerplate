import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './store.js';
import App from './components/App/App.jsx';
import './Index.scss';

const Index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
