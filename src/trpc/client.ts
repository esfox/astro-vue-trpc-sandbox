import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { trpcRouter } from "./router";

export const trpc = createTRPCProxyClient<typeof trpcRouter>({
  links: [
    httpBatchLink({
      url: "/trpc",
    }),
  ],
});
