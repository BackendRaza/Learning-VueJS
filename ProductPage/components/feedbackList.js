app.component('feedback-list',  {
    props:{
      feedbacklist:{
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="container-fluid">
      <div class="row">
      <div v-for="(feed, index) in feedbacklist" :key="index" class="col-md-3 card text-bg-info m-3">
        <div class="card-body">
            <h5 class="card-title">{{ feed.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Ratings</h6>
            <p class="card-text">{{ feed.feedback }}</p>
            <p>Ratings: {{feed.ratings}}</p>
        </div>
      </div>
    </div>
    </div>`
})