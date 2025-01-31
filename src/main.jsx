import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from './App.jsx'
const App = lazy(() => import("./App.jsx"));
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense>
      <App />
    </Suspense>
  </BrowserRouter>
);
