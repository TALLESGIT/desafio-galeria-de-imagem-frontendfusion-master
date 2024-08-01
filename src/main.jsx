import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Styles/global.css";
import { GlobalStyle } from "./Styles/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
		<GlobalStyle />
	</React.StrictMode>,
);
