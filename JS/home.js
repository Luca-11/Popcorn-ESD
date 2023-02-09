import navigation from "./navigation.js";

export default {
  components: { navigation },
  template: `


<div id="content">
  <div>
    <video id="video" src="./img/IntroHubESDPopcorn.mp4" autoplay loop muted></video>
    <div class="gradient"></div>
  </div>

  <div>

    <navigation class="z-2"></navigation>

    <div class="d-flex flex-column justify-content-center" id="title">

      <h1 class="text-center z-2 my-5 text-white">Challenge our Pop Culture</h1>
      <button>Check our last game</button>

        <div id="buttons" class="d-flex justify-content-center">
          <a href ="">Pop-corn game</a>
          <a id="btn-right" href="">Swipe-game</a>
        </div>
    
    </div>
  </div>
</div>
  <footer class="bg-black" class="z-2">
    <div id="test" class="d-flex flex-column justify-content-center">
      <img id="heart" src="./img/heart-2x.png"/>
      <p class="text-center text-white">Good Places For Popcorn Covers</p>
    </div>

    <div id="follow">
      <a href="">Facebook</a>
      <a href="">Instagram</a>
      <a href="">Youtube</a>
      <a href="">Twitter</a>
      <a href="">Soundcloud</a>
    </div>
  </footer>
  



`,
};
