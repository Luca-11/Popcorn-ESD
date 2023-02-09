import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import home from "./home.js";
import presgame from "./pres-game.js";
createApp({
  components: { home },
  template: `

<home></home>

`,
}).mount("#app");

createApp({
  components: { presgame },
  template: `
  
  <presgame></presgame>



`,
}).mount("#pres-app");
