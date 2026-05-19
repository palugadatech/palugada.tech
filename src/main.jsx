import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ReactGA from "react-ga4";
import ReactPixel from "react-facebook-pixel";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

if (GA_ID) {
  ReactGA.initialize(GA_ID);
}

if (META_PIXEL_ID) {
  ReactPixel.init(META_PIXEL_ID);
  ReactPixel.pageView();
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
