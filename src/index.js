import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GuitarsContextProvider } from "./store/guitars-context";
import { CartProvider } from "./store/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./store/user_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <GuitarsContextProvider>
        <CartProvider>
        <StrictMode>
          <App />
          </StrictMode>
        </CartProvider>
      </GuitarsContextProvider>
    </UserProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
