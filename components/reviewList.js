app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: 
    /*html*/
    `
    <div class="row container">   
    <div v-for="(review, index) in reviews" :key="index" class="col-md-3 card text-bg-info m-3">
        <div class="card-body">
            <h5 class="card-title">{{ review.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Ratings</h6>
            <p class="card-text">{{ review.rating }}</p>
            <p>Review: {{review.review}}</p>
        </div>
    </div>
    </div>`,
    
})


