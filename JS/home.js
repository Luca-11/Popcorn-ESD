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
    <nav class="container my-3">
  <div class="row">
    <div class="col-12 " id="menu">
      <div class="col-12">
      <a href="https://hub2023.popcorn-esd.com/">
        <img class="img-fluid" src="./img/logoPopcorn.png" alt="logo-popcorn" id="logoPopcorn"/>
      </a>
      </div>
       
    </div>
  </div>
</nav>
    <div class="main">
    <img class="Logo_Hub img-fluid" src="img/Logo_Hub.webp" id="logo">
      <a class="Dcouvrir-les-dfis" href="#texte">DÉCOUVRIR LES DÉFIS</a>
    </div>
  </div>
</div>
   

`,
};