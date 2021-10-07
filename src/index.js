import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Link from "./components/link/link";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Link />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
