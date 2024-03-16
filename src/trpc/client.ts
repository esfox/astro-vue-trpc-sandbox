import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { trpcRouter } from "../trpc/routers";

export const trpc = createTRPCProxyClient<typeof trpcRouter>({
  links: [
    httpBatchLink({
      url: "/trpc",
    }),
  ],
});
