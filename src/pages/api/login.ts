import type { APIRoute } from "astro";

export const post: APIRoute = async function post({ request }) {
  const data = request.json();

  return new Response(JSON.stringify({ user: "test" }), { status: 200 });
};
