import navigation from "./navigation.js";
import card from "./card.js";
export default {
  props: {
    url: String,
  },
  components: { navigation, card },
  template: `
<div id="content">
  <div>
  <video id="video" src="./img/IntroHubESDPopcorn.mp4" autoplay loop muted></video>
  <div class="gradient"></div>
  </div>
  
  <div>
    <navigation class="z-2"></navigation>

    <div class="d-flex flex-column justify-content-center" id="title">
      <h1 class="text-center z-2 my-5">Challenge our Pop Culture</h1>
      <button id="check">Check our last game</button>
      <div id="buttons" class="my-5">
      <a href ="">Pop-corn game</a>
      <a id="btn-right" href="">Swipe-game</a>
    </div>
    </div>
  </div>
</div>
   

`,
};
