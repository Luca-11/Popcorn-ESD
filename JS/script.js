import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import home from "./home.js";
import card from "./card.js";
import presGame from "./pres-game.js";

const url = "http://185.44.81.51:9740/jeux";
const parseUrl = new URL(window.location.href);
const id = parseUrl.searchParams.get("id");

createApp({
  components: { home, card },
  template: `

<home ></home>

<div id="aled" class= "container">
  <div class="row">
    <div id="feat" class="my-5">
    <div id="logos" class="my-5">
    <a href="https://popcorn66.fr/">
      <img class="img-fluid logoAnimation" src="./img/logo.png" alt="logo-popcorn"/>
    </a>
    <a href="https://ecole-du-digital.com">
      <img class="img-fluid logoAnimation" src="./img/logo-esd.png" alt="logo-esd"/>
    </a>
  
      </div>
    </div>
    <div class="text-center" id="texte">
      <h2>Vous présente de nouveaux Jeux</h2>
      <p>Lörem ipsum ong eust yn än detism neling. Vade got mitebeligt. Netepp pebel. Dyspod trang i vada, att spårpixel disamma. Bloggare biong tefili jag neska. </p>
    </div>
  </div>
</div>

<card url="${url}"></card>

<footer class="bg-black" >
<div class="container">
<div class="row">
  <div id="heartContent" class="p-5">
    <img id="heart" src="./img/red_heart.png" class="img-fluid" alt="coeur"/>
    <p class=" my-2 text-white">Good Places For Popcorn Covers</p>
  </div>
  <div id="follow">
    <a href="https://www.facebook.com/PopCornSoixanteSix/">Facebook</a>
    <a href="https://www.instagram.com/popcorn66fr/">Instagram</a>
    <a href="https://www.youtube.com/c/popcorn66">Youtube</a>
    <a href="https://twitter.com/PopCorn66_FR">Twitter</a>
    <a href="https://soundcloud.com/popcorn66fr">Soundcloud</a>
  </div>
  </div>
  </div>
</footer>
`,
}).mount("#app");

createApp({
  components: {
    presGame,
  },
  template: `
  <presGame :id="${id}" url="${url}"></presGame>
  `,
}).mount("#pres-app");
