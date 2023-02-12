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
  
  <div id="contentHome">
    <navigation class="z-2"></navigation>

    <div class="d-flex flex-column justify-content-center" id="title">
      <h1 class="text-center z-2 my-5">PopCorn Gaming ESD</h1>
      <a id="check" href="#games">Check our last game</a>
     
    </div>
  </div>
</div>
   

`,
};
