import type { AstroIntegration } from "astro";
import { getIronSession, IronSessionOptions } from "iron-session";
import getPropertyDescriptorForReqSession from "./getPropertyDescriptorForReqSession";

type IronSessionConfig = {
  options: IronSessionOptions;
};

export default function createPlugin(
  config: IronSessionConfig
): AstroIntegration {
  const { options } = config;
  return {
    name: "@astrojs/iron-session",
    hooks: {
      "astro:server:setup": ({ server }) => {
        server.middlewares.use(async function ironSessionMiddleware(
          req,
          res,
          next
        ) {
          const session = await getIronSession(req, res, options);
          Object.defineProperty(
            req,
            "session",
            getPropertyDescriptorForReqSession(session)
          );

          console.log(req.session);

          next();
        });
      },
    },
  };
}
