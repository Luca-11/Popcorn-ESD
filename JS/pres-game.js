import card from "./card.js";
export default {
  props: { url: String },
  components: { card },
  template: `

  
 <card text="Lorem dolor sit amet, consectetur adipiscing elit. Aenean laoreet posuere libero et rutrum. Nunc ullamcorper mollis diam at rutrum. Etiam elementum ullamcorper arcu vel aliquet. Morbi leo sapien, ullamcorper nec posuere ut, eleifend eu est. Donec gravida pellentesque cursus" credits="Crédits" image="./img/wallpaper-1.jpg"></card>
  
  
  `,
};
