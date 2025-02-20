import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-oegz3g6pqp8fms76.us.auth0.com"
     clientId="z2NWmYMXUhjRIT6IKLUrfKoDmqPiSuZw"
     authorizationParams={{
      redirect_uri: "https://real-estate-frontend-ecru.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

