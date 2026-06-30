import React from "react"
import ReactDOM from "react-dom/client"
import { SwearProvider } from "./context/SwearContext.jsx"
import { BrowserRouter } from "react-router-dom"
import './index.css';

import { App } from "./App.jsx"

import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SwearProvider>
      <App />
    </SwearProvider>
  </BrowserRouter>
)
