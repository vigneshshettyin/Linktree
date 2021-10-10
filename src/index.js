import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Link from "./components/link/link";
import ThemeState from "./state/theme/themeState";

ReactDOM.render(
  <ThemeState>
    <Header />
    <Link />
    <Footer />
  </ThemeState>,
  document.getElementById("root")
);
