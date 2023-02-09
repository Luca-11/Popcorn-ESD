export default {
  props: { text: String, credits: String, image: String },
  template: `
    <section>

    <img id="background" :src="image"/>
    <div class="gradient"></div>

    <div class="container">
      <div class="row">
      <div id="contents" class="col-12">
        
         <div class="d-flex justify-content-center">

          <div id="right" class="col-8">
            <p class="text-white">{{text}}</p>
          </div>

          <div id="left" class="col-4">
            <p class="text-white">{{credits}}</p>
          </div>

        </div>

      </div>
    </div>
  </div>

  </section>

`,
};
