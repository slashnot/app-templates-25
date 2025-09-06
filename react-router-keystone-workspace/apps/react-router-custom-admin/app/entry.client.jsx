import React, { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes.js";

// Create routes for client-side with simplified loaders (no server context)
const clientRoutes = routes.map(route => ({
  ...route,
  children: route.children?.map(child => ({
    ...child,
    children: child.children?.map(grandChild => ({
      ...grandChild,
      // For client-side, loaders would need to make API calls
      loader: grandChild.loader ? async (_args) => {
        // This would be replaced with actual API calls
        return { posts: [] };
      } : undefined
    }))
  }))
}));

// Create browser router with hydration data for SSR
let router = createBrowserRouter(clientRoutes, {
  hydrationData: window.__staticRouterHydrationData,
});

// Hydrate the app
hydrateRoot(
  document.getElementById("root"),
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
