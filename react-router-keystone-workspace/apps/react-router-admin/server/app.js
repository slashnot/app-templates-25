import { createRequestHandler } from "@react-router/express";
import express from "express";
import { keystoneContext } from "@app/keystone/core/context"

export const app = express();

const getKeystoneContext = (req, res) => {
  return keystoneContext.withRequest(req, res);
}

app.use(
  createRequestHandler({
    // @ts-expect-error - virtual module provided by React Router at build time
    build: () => import("virtual:react-router/server-build"),
    getLoadContext: async(req, res) => {
      const context = await getKeystoneContext(req, res);
      console.log("Keystone context:", context);
      return { ...context, req, res };
    }
  })
);
