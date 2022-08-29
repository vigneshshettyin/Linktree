import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ThemeState from "./state/theme/themeState";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);

const Username = process.env.REACT_APP_USER_NAME || "Env Error!";

document.title = `${Username} | Linktree | Make your link do more.`;
root.render(
  <ThemeState>
    <App />
  </ThemeState>
);
serviceWorkerRegistration.register();
reportWebVitals();
