import express from "express";
import { keystoneContext } from "@app/keystone/core/context";
import { render } from "../app/entry.server.jsx";

export const app = express();

const getKeystoneContext = (req, res) => {
  return keystoneContext.withRequest(req, res);
};

// Custom request handler for React Router framework
app.use(async (req, res, _next) => {
  try {
    console.log(`[APP] Processing request: ${req.method} ${req.url}`);
    
    // Get Keystone context
    const context = await getKeystoneContext(req, res);
    
    // Create a Web API Request object
    const request = new Request(`${req.protocol}://${req.get('host')}${req.originalUrl}`, {
      method: req.method,
      headers: new Headers(req.headers),
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
    });

    console.log("[APP] About to render with custom framework");
    
    // Render the app with our custom framework
    const response = await render(request, { ...context, req, res });
    
    console.log("[APP] Render completed, status:", response.status);
    
    // Send the response
    if (response instanceof Response) {
      // Copy headers from Web API Response to Express response
      response.headers.forEach((value, key) => {
        res.set(key, value);
      });
      
      res.status(response.status);
      
      // Send the body
      const body = await response.text();
      console.log("[APP] Sending response, body length:", body.length);
      res.send(body);
    } else {
      console.log("[APP] Invalid response type");
      res.status(500).send('Internal Server Error');
    }
  } catch (error) {
    console.error('[APP] Server render error:', error);
    
    // Send a basic error response
    res.status(500).setHeader('Content-Type', 'text/html').send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Server Error</title>
        </head>
        <body>
          <h1>Server Error</h1>
          <p>Error: ${error.message}</p>
          <pre>${error.stack}</pre>
        </body>
      </html>
    `);
  }
});
