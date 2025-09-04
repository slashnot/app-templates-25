import React from "react";
import { renderToString } from "react-dom/server";
import process from "process";
import {
    createStaticHandler,
    createStaticRouter,
    StaticRouterProvider,
} from "react-router";
import routes from "./routes.js";
import { Layout } from "./root.jsx";

export async function render(request, context) {
    // Create routes with context injected into loaders
    const routesWithContext = routes.map(route => ({
        ...route,
        children: route.children?.map(child => ({
            ...child,
            children: child.children?.map(grandChild => ({
                ...grandChild,
                loader: grandChild.loader ? (args) => grandChild.loader({ ...args, context }) : undefined
            }))
        }))
    }));

    // Create static handler for server-side rendering
    const { query, dataRoutes } = createStaticHandler(routesWithContext);

    // Run actions/loaders to get the routing context
    let routerContext = await query(request);

    // If query returns a Response, send it raw (route probably redirected)
    if (routerContext instanceof Response) {
        return routerContext;
    }

    // Create a static router for SSR
    let router = createStaticRouter(dataRoutes, routerContext);

    // Render the app with StaticRouterProvider
    let html = renderToString(
        <Layout>
            <StaticRouterProvider
                router={router}
                context={routerContext}
            />
        </Layout>
    );

    // Setup headers from actions and loaders from deepest match
    let leaf = routerContext.matches[routerContext.matches.length - 1];
    let actionHeaders = routerContext.actionHeaders?.[leaf?.route?.id] || new Headers();
    let loaderHeaders = routerContext.loaderHeaders?.[leaf?.route?.id] || new Headers();
    let headers = new Headers(actionHeaders);

    if (loaderHeaders) {
        for (let [key, value] of loaderHeaders.entries()) {
            headers.append(key, value);
        }
    }

    headers.set("Content-Type", "text/html; charset=utf-8");

    // Determine if we're in development or production
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    // Production assets - these would normally be read from a manifest
    const cssFile = '/assets/entry-CrGgRrUU.css';
    const jsFile = '/assets/entry.client-BkbKCmv3.js';

    // Create the full HTML document
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>React Router Custom Framework</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" />
  ${isDevelopment ? '<script type="module" src="/@vite/client"></script>' : `<link rel="stylesheet" href="${cssFile}" />`}
</head>
<body>
  <div id="root">${html}</div>
  <script>
    window.__staticRouterHydrationData = ${JSON.stringify(routerContext).replace(/</g, "\\u003c")};
  </script>
  ${isDevelopment ? '<script type="module" src="/app/entry.client.jsx"></script>' : `<script type="module" src="${jsFile}"></script>`}
</body>
</html>`;

    return new Response(fullHtml, {
        status: routerContext.statusCode || 200,
        headers,
    });
}
