import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import ironsession from "./src/iron-session";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    tailwind(),
    ironsession({
      options: {
        cookieName: "auth",
        password: "complex_password_at_least_32_characters_long",
        // if your localhost is served on http:// then disable the secure flag
        cookieOptions: {
          secure: false,
        },
      },
    }),
  ],
});
