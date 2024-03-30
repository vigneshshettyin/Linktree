import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeState from "./state/theme/themeState";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.render(
  <ThemeState>
    <Analytics />
    <App />
  </ThemeState>,
  document.getElementById("root")
);
