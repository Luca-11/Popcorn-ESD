export default {
  props: { text: String, credits: String },
  template: `
  <div class="d-flex justify-content-center">

          <div id="right" class="col-8">
            <p class="text-white">{{text}}</p>
          </div>

          <div id="left" class="col-4">
            <p class="text-white">{{credits}}</p>
          </div>

        </div>`,
};
