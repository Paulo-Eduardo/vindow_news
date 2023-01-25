import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.get["x-rapidapi-key"] =
	import.meta.env.VITE_RAPIDAPI_KEY;
axios.defaults.headers.get["x-rapidapi-host"] =
	import.meta.env.VITE_RAPIDAPI_HOST;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
