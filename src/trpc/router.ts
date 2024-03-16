import * as stuffActions from "./actions/stuff";
import { trpcInstance } from "./instance";

export const trpcRouter = trpcInstance.router({
  ...stuffActions,
});
