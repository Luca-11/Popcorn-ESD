import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import home from "./home.js";
import card from "./card.js";
import presGame from "./pres-game.js";

const url= "http://185.44.81.51:9740/jeux";
const parseUrl =  new URL(window.location.href)
const id = parseUrl.searchParams.get("id");

createApp({
  components: { home, card},
  template: `

<home ></home>

<div id="games" class= "container">
  <div class="row">
    <div id="feat" class="my-5">
    <div id="logos" class="my-5">
      <img class="img-fluid" src="./img/logo.png" alt="logo-popcorn"/>
      <img class="img-fluid" src="./img/logo-esd.png" alt="logo-esd"/>
      </div>
    </div>
    <div class="text-center" id="texte">
      <h2>Vous présente de nouveaux Jeux</h2>
      <p class="my-5">"Revivez les années 80 avec ces trois jeux qui vous transporteront dans une époque de lumières clignotantes, de pop culture et de divertissement déjanté"</p>
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
    <a href="">Facebook</a>
    <a href="">Instagram</a>
    <a href="">Youtube</a>
    <a href="">Twitter</a>
    <a href="">Soundcloud</a>
  </div>
  </div>
  </div>
</footer>
`,
}).mount("#app");

createApp({
  components:{
    presGame
  },
  template:`
  <presGame :id="${id}" url="${url}"></presGame>
  `
}).mount("#pres-app");