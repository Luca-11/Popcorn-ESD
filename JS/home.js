import navigation from "./navigation.js";

export default {
  components: { navigation },
  template: `


<div id="content">
  <div>
    <video id="video" src="./img/IntroHubESDPopcorn.mp4" autoplay loop muted></video>
    <div class="gradient"></div>
  </div>

  <div id="contenue">
    <div>
      <navigation class="z-2"></navigation>

      <div class="d-flex flex-column justify-content-center" id="title">

        <h1 class="text-center z-2  text-white">Challenge our Pop Culture</h1>
        <button class="my-5">Check our last game</button>

          <div id="buttons" class="d-flex justify-content-center">
            <a href ="">Pop-corn game</a>
            <a id="btn-right" href="">Swipe-game</a>
          </div>
      
      </div>
    </div>
  </div>
</div>





<div id="aled" class= "container">
  <div class="row">
    <div id="help">

      <img class="img-fluid" src="./img/logo-bas.png" alt=""/>
    </div>

    <div class="texte text-align-center" id="texte">
      <p>Vous présente des nouveaux jeux</p>
      <p>Lörem ipsum ong eust yn än detism neling. Vade got mitebeligt. Netepp pebel. Dyspod trang i vada, att spårpixel disamma. Bloggare biong tefili jag neska. </p>
    </div>
  </div>
</div>







<footer class="bg-black" class="z-2">
  <div id="test" class="d-flex flex-column justify-content-center">
    <img id="heart" src="./img/heart-2x.png"/>
    <p class="text-center text-white">Good Places For Popcorn Covers</p>
  </div>

  <div id="follow">
    <a href="https://www.facebook.com/PopCornSoixanteSix/">Facebook</a>
    <a href="https://www.instagram.com/popcorn66fr/">Instagram</a>
    <a href="https://www.youtube.com/c/popcorn66">Youtube</a>
    <a href="https://twitter.com/PopCorn66_FR">Twitter</a>
    <a href="https://soundcloud.com/popcorn66fr">Soundcloud</a>
  </div>
</footer>
  



`,
};
