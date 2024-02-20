import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "GlobalStyle";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import { AuthProvider } from "context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
        <GlobalStyle />
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
