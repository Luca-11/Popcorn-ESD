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
    let resp = await fetch(this.url);
    let data = await resp.json()
    console.log(data)
    this.infos = data
   
},

template: `
<div class="container my-5"> 
<div class="row">
    <contentCard v-for="info in infos" :key="info.id" :image="info.Picture"  :id="info.id" ></contentCard>
    </div>
</div>
`


}