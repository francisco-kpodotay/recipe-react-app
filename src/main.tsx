import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./lib/theme";
import { MealProvider } from "./context/FocusContext.tsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <MealProvider>
          <CssBaseline />
          <App />
        </MealProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
