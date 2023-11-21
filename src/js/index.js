//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import "../styles/App.css";
import { Main } from "./component/Main.jsx";


ReactDOM.render(<Main />, document.querySelector("#app"));
