import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import type { APIRoute } from "astro";
import { createContext } from "../../trpc/context";
import { trpcRouter } from "../../trpc/router";

export const ALL: APIRoute = ({ request }) => {
  return fetchRequestHandler({
    endpoint: "/trpc",
    req: request,
    router: trpcRouter,
    createContext,
  });
};
