import React from "react";
import {
  isRouteErrorResponse,
  Outlet,
} from "react-router";
import Providers from "./Providers.jsx";
import "./app.css";

// Layout component for server-side rendering
export function Layout({ children }) {
  return <>{children}</>;
}

// Root App component
export default function App() {
  return (
    <Providers>
      <Outlet />
    </Providers>
  );
}

// Error boundary component
export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
