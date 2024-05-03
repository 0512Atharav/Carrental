import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-toovqh2laif1jqjz.us.auth0.com"
    clientId="vY32notJVDY2S8Cb8TJkrPTsIjTrEiS7"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Auth0Provider>,
);
