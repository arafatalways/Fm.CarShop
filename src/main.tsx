import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "@/App";
import { ThemeProvider } from "@/components/DarkMode/theme-provider";
import { RouterProvider } from "react-router";
import { router } from "@/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <App />
    </ThemeProvider>
  </StrictMode>
);
