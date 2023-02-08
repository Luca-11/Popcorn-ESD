export default{

    props:{
        Image : String,
        text: String
    },
    template : `
    <div class="card">

    <img :src="Image"  class="img-fluid"/>
    <p>{{text}}</p>
    </div>
    
    `

}