import card from "../card.js";
export default {
  props: { url: String },
  components: { card },
  template: `
  <section>

    <img id="background" src="./img/wallpaper-1.jpg"/>
    <div class="gradient"></div>

    <div class="container">
      <div class="row">
      <div id="content" class="col-12">
        
        <card text="Lorem dolor sit amet, consectetur adipiscing elit. Aenean laoreet posuere libero et rutrum. Nunc ullamcorper mollis diam at rutrum. Etiam elementum ullamcorper arcu vel aliquet. Morbi leo sapien, ullamcorper nec posuere ut, eleifend eu est. Donec gravida pellentesque cursus" credits="Crédits" ></card>

      </div>
    </div>
  </div>
  </section>
  

  
  
  `,
};
