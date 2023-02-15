import navigation from "./navigation.js";
export default {
  data() {
    return {
      //on vaire un tableau qui va stocké les data venant de la function async
      infoGame: [],
      infoGroupe: [],
    };
  },
  props: {
    id: Number,
    url: String,
  },
  components: { navigation },
  // va recupérer les data dans la rest api et le mettre sous format json
  // ici on va récupérer les données en fonction des id et -1 car on commence a 0
  async created() {
    let resp = await fetch(this.url);
    let data = await resp.json();
    console.log(data);
    this.infoGame = data[this.id - 1];
    this.infoGroupe = data[this.id - 1].groupe;
    // this.infoGroupe = data[this.props.id].groupe;
  },
  template: `
  <section id="infos">
          <img id="background" :src="infoGroupe.logo" alt="image-jeux"/>
          <div class="gradient"></div>
          <navigation id="header" ></navigation>
          <div class="container">
            <div class="row">
              <div id="contents" class="col-12">
               <div class="col-md-12 col-12" id="contentJeux">
                <div id="left" class="col-md-6 col-10">
                  <h2 id="gameTitle">{{infoGame.Title}}</h2>
                  <p class="text-white my-5">{{infoGame.Description}}</p>
                 
                  <p class="text-white">Groupe : {{infoGroupe.name}}</p>
                </div>
                <div id="right" class="col-md-6 col-12">
                  <a :href="infoGame.lien" id="play" target="_blank">Jouer</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
  `,
};