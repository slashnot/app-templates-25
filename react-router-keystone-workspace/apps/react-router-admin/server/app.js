import { createRequestHandler } from "@react-router/express";
import express from "express";
import { keystoneContext } from "@app/client/server/core/context"

export const app = express();

app.use(
  createRequestHandler({
    // @ts-expect-error - virtual module provided by React Router at build time
    build: () => import("virtual:react-router/server-build"),
    getLoadContext:(req,res)=>keystoneContext.withRequest(req,res) 
  })
);
