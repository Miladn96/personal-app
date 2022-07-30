import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { App } from "./app/app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
);
