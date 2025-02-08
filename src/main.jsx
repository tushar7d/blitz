import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Index from "./pages/App.jsx";
import Layout from "./components/mdxLayout.jsx";
import One from "./pages/one.mdx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="">
        <div className="mx-auto h-full w-full max-w-[1200px] p-4">
          <Routes>
            <Route index path="/" element={<Index />} />
            <Route path="work" element={<Layout />}>
              <Route path="one" element={<One />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </StrictMode>,
);
