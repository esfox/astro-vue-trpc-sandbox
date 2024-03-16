import PrimeVue from "primevue/config";
import type { App } from "vue";

import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-teal/theme.css";

export default (app: App) => {
  app.use(PrimeVue);
};
