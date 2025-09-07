import bodyParser from "body-parser";
import { createRequestHandler } from "@react-router/express";
import express from "express";
import { keystoneContext } from "@app/keystone/core/context"

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const build = () => import("virtual:react-router/server-build")

const getKeystoneContext = async (req, res) => await keystoneContext.withRequest(req, res)

app.use(
  createRequestHandler({
    // @ts-expect-error - virtual module provided by React Router at build time
    build,
    getLoadContext: async (req, res) => {
      return { req, res, ...(await getKeystoneContext(req, res)) };
    }
  })
);

export { app };