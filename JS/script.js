import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import home from "./home.js";
createApp({
  components: { home },
  template: `

<home></home>

`,
}).mount("#app");
