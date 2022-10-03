import express from "express";
import { ironSession } from "iron-session/express";
import { handler as ssrHandler } from "./dist/server/entry.mjs";

const app = express();
app.use(express.static("dist/client/"));
app.use(ssrHandler);
app.use(
  ironSession({
    cookieName: "auth",
    password: "complex_password_at_least_32_characters_long",
    cookieOptions: {
      secure: false,
    },
  })
);

app.listen(8080);
