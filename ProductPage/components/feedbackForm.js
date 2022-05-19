app.component('feedback-form',{
    template:
    /*html*/
    `<div class="col-sm-12 mt-5 p-5 mb-5 container-fluid">
    <h2>Feedback Form</h2>
    <form class="" @submit.prevent="onSubmit">
    <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter Your Name" v-model="name">
      </div>
      <div class="mb-3">
        <label class="form-label">Your Review</label>
        <textarea placeholder="Enter your feedback" class="form-control" id="feedback" v-model="feedback"></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label">Provide your Ratings</label>
        <select class="form-select"  v-model.number="ratings">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </select>
      </div>
      <div class="mb-3">
        <input class="btn btn-success" type="submit" value="Submit">
      </div>
      </form>
  </div>`,
  
  data(){
      return{
          name: '',
          feedback: '',
          ratings: null
      }
  },
  methods:{
      onSubmit(){
          if(this.name === '' || this.feedback === '' || this.ratings === ''){
              alert("Form Incomplete!!")
              return
          }
        let prodreview = {
            name: this.name,
            feedback: this.feedback,
            ratings: this.ratings
        }
        this.$emit('submit-feedback', prodreview)
        this.name = ''
        this.feedback = ''
        this.ratings= null
      }
  }
})