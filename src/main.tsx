import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { WordProvider } from "./context/word.contex";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WordProvider>
      <App />
    </WordProvider>
  </React.StrictMode>
);
