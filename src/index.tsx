import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom'

import { Routes } from './routes'

import "./theme/styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
