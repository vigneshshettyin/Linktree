import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ThemeState from "./state/theme/themeState";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);
console.log(process.env.REACT_APP_SOCIAL_LINKS.split(","));
document.title = `${process.env.REACT_APP_USER_NAME} | Linktree | Make your link do more.`;
root.render(
  <ThemeState>
    <App />
  </ThemeState>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
