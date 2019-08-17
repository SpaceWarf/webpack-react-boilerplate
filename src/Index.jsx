import React from "react";
import ReactDOM from "react-dom";
import App from './components/App/App.jsx';
import './Index.scss';

const Index = () => {
  return <App />;
};

ReactDOM.render(<Index />, document.querySelector("#root"));
