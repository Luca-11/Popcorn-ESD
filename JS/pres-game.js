
export default{
  data(){
    return{
        //on vaire un tableau qui va stocké les data venant de la function async 
        infoGame:[],
        infoGroupe:[],
    }
},
props:{
    id:Number,
    url:String,

},
// va recupérer les data dans la rest api et le mettre sous format json
// ici on va récupérer les données en fonction des id et -1 car on commence a 0
async created(){
    let resp = await fetch(this.url);
    let data= await resp.json();
    console.log(data);
    this.infoGame =  data[0];
    this.infoGroupe = data[0].groupe
    // this.infoGroupe = data[this.props.id].groupe;
 
},
  template: `
  
  <section>
          <img id="background" :src="infoGame.Picture"/>
          <div class="gradient"></div>
          <a :href="infoGame.lien" id="play">Jouer</a>
          <div class="container">
            <div class="row">
            <div id="contents" class="col-12">

               <div class="d-flex justify-content-center">
                <div id="left" class="col-8">
                  <p class="text-white">{{infoGame.Description}}</p>
                  
                </div>
                <div id="right" class="col-4">
                <h5>Crédits : </h5>
                  <p class="text-white">{{infoGroupe.name}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
  
  
  `,

};