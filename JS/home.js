import navigation from "./navigation.js";

export default {
  components: { navigation },
  template: `
  <div>
  <video id="video" src="./img/IntroHubESDPopcorn.mp4" autoplay loop muted></video>
  <div class="gradient"></div>
  </div>

    <navigation class="z-2"></navigation>

    <div class="d-flex flex-column justify-content-center" id="title">
      <h1 class="text-center z-2 my-5">Challenge our Pop Culture</h1>
      <button>Check our last game</button>
    </div>

    <div id="buttons" class="d-flex justify-content-center">
      <a href ="">Pop-corn game</a>
      <a id="btn-right" href="">Swipe-game</a>
    </div>
    

`,
};
