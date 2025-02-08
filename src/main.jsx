import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router";
import "./index.css";
import App from "./App.jsx";

import One from "./pages/one.mdx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/one" element={<One />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
