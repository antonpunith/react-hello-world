import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { HelloMessage } from "./HelloMessage";

function App() {
  return (
    <div className="App">
      <HelloMessage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
