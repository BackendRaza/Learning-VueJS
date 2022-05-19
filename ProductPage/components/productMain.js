app.component('product-main', {
    template:
    /*html*/
    `<div class="row m-5">
            <p class="display-2 text-center">{{title}}</p>
            <hr class="">
            <!-- for image -->
            <div class="col-lg-6 col-md-6 col-sm-6 col-sm-12 text-center">
                <div class="container" style="height: 500px;">
                    <img class="img img-fluid" v-bind:src="image" alt="product_image">
                </div>
                <!-- for image thumbnails -->
                <div class="d-flex justify-content-around p-2 m-3">
                  <img id="thumbs" class="img-fluid img-thumbnail" v-for="t in thumbnails" v-bind:src="t.thumb" alt="" @mouseover="changeImage(t.thumb)">
                </div>
            </div>
            <!-- for details -->
            <div class="col-lg-5 col-md-5 col-sm-12">
                <div class="contaner">
                    <h2>{{prodName}}</h2>
                    <p class="lead">{{desc}}</p>
                    <ul>
                        <li v-for="feature in features">{{feature}}</li>
                    </ul>
                    <button class="btn btn-info m-3" v-on:click="addToCart()">Add to Cart</button>
                    <button class="btn btn-success">Buy Now</button>
                </div>
            </div>
        </div>`,
        data(){
            return{
                title:'Product Page',
                prodName:'Dumbells Hexagon',
                desc:'Rubber coated with stainless steel',
                features: ['Rubber Coating','10 Days return policy','One Year warranty'],
                image: "./assets/img/thumbells0.png",
                thumbnails: [
                    {id:001, color: "Blue", thumb:"./assets/img/thumbells0.png"},
                    {id:002, color: "Green", thumb:"./assets/img/thumbells1.png"},
                    {id:003, color: "Red", thumb:"./assets/img/thumbells2.png"},
                    {id:004, color: "Yellow", thumb:"./assets/img/thumbells0.png"}
                ],
                feedbacklist:[]
            }
        },
        methods:{
            changeImage(thumbnails){
                this.image = thumbnails
            },
            addToCart(){
                this.$emit('add-to-cart')
            }
        }
})