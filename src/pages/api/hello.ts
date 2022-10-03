import type { APIRoute } from "astro";

export const get: APIRoute = async function get({ request }) {
  console.log(request);

  return new Response(JSON.stringify({ user: "test" }), { status: 200 });
};
