import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

export function createContext({
  req,
  resHeaders,
}: FetchCreateContextFnOptions) {
  return { req, resHeaders };
}
