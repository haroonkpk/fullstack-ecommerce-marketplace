import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Form } from "react-router-dom";
import DialogBox from "./components/login.signup/DialogBox.jsx";
import Profile from "./pages/Profile.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <DialogBox />
            <Profile/>
      <App />
    </StrictMode>
  </BrowserRouter>
);
