import contentCard from "./contentCard.js";
export default{
    data(){
        return{
            infos : []
        }
    },
    components:{
        contentCard
    },
props:{
    url : String
},
async created(){
    let resp = await fetch('http://localhost:3500/jeux');
    let data = await resp.json()
    console.log(data)
    this.infos = data
   
},
template: `
<div class="container"> 
<div class="row">
    <contentCard v-for="info in infos" :key="info.id" :image="info.Picture" :text="info.Title"></contentCard>
    
    </div>
</div>
`


}