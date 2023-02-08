import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import home from "./home.js";
import card from "./card.js";
const url= "http://localhost:3500/jeux";
createApp({
  components: { home, card},
  template: `

<home ></home>
<card url="${url}"></card>
`,
}).mount("#app");
