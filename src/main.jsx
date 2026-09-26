import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { AdminAuthProvider } from "./context/AdminAuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminAuthProvider>
        <ProductProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ProductProvider>
      </AdminAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);