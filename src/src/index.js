import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import EventsContextProvider from "./contexts/eventContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <EventsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </EventsContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();