// src/main.jsx
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

// 1. Create the router object
const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
// 2. Pass the router object to the RouterProvider
root.render(<RouterProvider router={router} />);