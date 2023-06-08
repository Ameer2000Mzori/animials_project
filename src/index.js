import React from "react";
import ReactDom from "react-dom/client";
import Apps from "./components/Apps";

const wire = document.getElementById("root");
const root = ReactDom.createRoot(wire);
root.render(<Apps />);