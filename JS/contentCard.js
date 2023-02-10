export default{

    props:{
        id:Number,
        image : String,
        text: String
    },
    methods:{
        redirection(){
            window.location.href="jeux.html?id="+ this.id;
    
        }
    },
    template : `
    <div class="carte col-md-4 col-12 my-5" @click="redirection">

    <img :src="image"  class="img-fluid" alt="image-jeux-groupe"/>
 
    </div>
    
    `

}