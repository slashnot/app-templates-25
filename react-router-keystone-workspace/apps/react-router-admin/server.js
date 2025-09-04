/* eslint-disable no-undef */
import compression from "compression";
import express from "express";
import morgan from "morgan";

// Configuration constants
const BUILD_PATH = "./build/server/index.js";
const DEVELOPMENT = process.env.NODE_ENV === "development";
const PORT = Number.parseInt(process.env.PORT || "3000");

/**
 * Creates and configures the Express application
 */
async function createApp() {
  const app = express();

  // Basic middleware setup
  app.use(compression());
  app.disable("x-powered-by");

  if (DEVELOPMENT) {
    await setupDevelopmentServer(app);
  } else {
    await setupProductionServer(app);
  }

  return app;
}

/**
 * Sets up the development server with Vite middleware
 */
async function setupDevelopmentServer(app) {
  console.log("Starting development server");

  const vite = await import("vite")
  const viteDevServer = await vite.createServer({
    server: { middlewareMode: true },
  })

  app.use(viteDevServer.middlewares);
  app.use(async (req, res, next) => {
    try {
      const source = await viteDevServer.ssrLoadModule("./server/app.js");
      return await source.app(req, res, next);
    } catch (error) {
      if (typeof error === "object" && error instanceof Error) {
        viteDevServer.ssrFixStacktrace(error);
      }
      next(error);
    }
  });
}

/**
 * Sets up the production server with static file serving
 */
async function setupProductionServer(app) {
  console.log("Starting production server");

  // Static asset serving with cache headers
  app.use(
    "/assets",
    express.static("build/client/assets", {
      immutable: true,
      maxAge: "1y"
    })
  );

  // Request logging
  app.use(morgan("tiny"));

  // Serve static files from build directory
  app.use(express.static("build/client", { maxAge: "1h" }));

  // Load and use the production app
  const productionApp = await import(BUILD_PATH);
  app.use(productionApp.app);
}

/**
 * Starts the server
 */
async function startServer() {
  try {
    const app = await createApp();

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
      console.log(`📦 Environment: ${DEVELOPMENT ? "development" : "production"}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

// Start the server
startServer();