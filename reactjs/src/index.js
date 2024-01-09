import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//creating root and rendering our component in the root
const el =document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<App/>);
