import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import home from "./home.js";
import card from "./card.js";
import presGame from "./pres-game.js";

const url= "https://popcorn.floriansylvain.fr/jeux";
const parseUrl =  new URL(window.location.href)
const id = parseUrl.searchParams.get("id");

createApp({
  components: { home, card},
  template: `

<home ></home>

<div id="games" class= "container" >
  <div class="row">
    
   
    <div class="text-center" id="texte">
      <p class="my-5 fs-3"><span>Sélectionnez un défi PopCOrn</span>
      et replongez dans l’ambiance
      des années 90 !</p>
    </div>
  </div>
</div>

<card url="${url}"></card>

<footer class="bg-black" >
<div class="container">
<div class="row">
  <div id="heartContent" class="p-5">
    <img id="heart" src="./img/red_heart.png" class="img-fluid" alt="coeur"/>
    <p class=" my-2 text-white">Good Places For Popcorn Lovers</p>
  </div>
  <div id="follow" class="my-5">
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
  components:{
    presGame
  },
  template:`
  <presGame :id="${id}" url="${url}"></presGame>
  <footer class="bg-black" >
<div class="container">
<div class="row">
  <div id="heartContent" class="p-5">
    <img id="heart" src="./img/red_heart.png" class="" alt="coeur"/>
    <p class=" my-2 text-white">Good Places For Popcorn Lovers</p>
  </div>
  <div id="follow" class="my-5">
    <a href="https://www.facebook.com/PopCornSoixanteSix/">Facebook</a>
    <a href="https://www.instagram.com/popcorn66fr/">Instagram</a>
    <a href="https://www.youtube.com/c/popcorn66">Youtube</a>
    <a href="https://twitter.com/PopCorn66_FR">Twitter</a>
    <a href="https://soundcloud.com/popcorn66fr">Soundcloud</a>
  </div>
  </div>
  </div>
</footer>
  `
}).mount("#pres-app");