import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Layout from "./components/mdxLayout.jsx";
import One from "./pages/one.mdx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <div className="mx-auto  h-full w-full max-w-[1024px] p-4 ">
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="work" element={<Layout />}>
          <Route path="one" element={<One />} />
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>,
);
