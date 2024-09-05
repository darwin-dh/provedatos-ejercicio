import React, { lazy } from "react"
import { createRoot } from "react-dom/client"
import { QueryClient, QueryClientProvider } from 'react-query';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
const queryClient = new QueryClient()

const container: any = document.getElementById("root")
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <div>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </div>
  </React.StrictMode>
);
