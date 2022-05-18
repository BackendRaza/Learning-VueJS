app.component('product-display', {
    template: 
    /*html*/
    `<h1>{{product}}</h1>
    <h2><a v-bind:href="link">Google</a></h2>
    <p v-if="inventory > 10">In Stock</p>
    <p>{{title}}</p>
    <p v-else-if="inventory <= 10 && inventory > 0" >Almost Finished</p>
    <p v-else>Out of Stock</p>
    <p v-if="inStock">On Sale</p>
    <p>{{description}}</p>
    <img v-bind:src="image"
    style="height: 500px; width:500px; border: 4px solid black;"
    :class="{'outOfStockImage': !inStock}">
    <ul style="list-style-type: none;">
        <li v-for="detail in details">{{detail}}</li>
    </ul>
    <div
    class="color-circle" 
    v-for="m in more_details" 
    :key="m.id" 
    @mouseover="updateImage(m.image)" 
    style="display: inline-block; margin:10px;"
    :style="{backgroundColor: m.color}"
    >
    </div>
    <ul style="list-style-type: none;">
        <li v-for="size in sizes">{{size.adults}}</li>
    </ul>
    <div>
        <button v-on:click="addToCart" :disabled="!inStock">Add to Cart</button>
        <button v-on:click="removeCart">Remove Cart</button>
        <div style="border: 1px solid black; display: inline-block; padding: 10px;">
            Cart {{cart}}
        </div>
    </div>`,
    data(){
        return {
            product: 'Socks',
            brand: 'Vue Learning',
            description: 'It is used to wear under the shoes!!',
            image: "./assets/images/sock_black.jpg",
            link: "https://www.google.com",
            inStock: true,
            inventory: 0,
            onSale:true,
            details:['cotton', 'polyster', 'plastic'],
            more_details: [
                {id: 001, color: 'midnightblue', image:"./assets/images/sock_black.jpg"},
                {id: 002, color:'Grey', image:"./assets/images/sock_white.jpg"}
            ],
            sizes: [{kids: 'Small'},{teens: 'Large'},{adults: 'Extra Large'}],
            
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        removeCart(){
            this.cart -= 1
        }
    },
    computed: {
        title(){
            return this.brand+' '+this.product
        }
    }
})