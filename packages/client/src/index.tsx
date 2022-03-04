import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { PokemonsContextProvider } from "./contexts/pokemonsContext";
import { App } from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <PokemonsContextProvider>
      <App/>
    </PokemonsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
