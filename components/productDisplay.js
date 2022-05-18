app.component('product-display', {
    props:{
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info mt-5">
        <h1 class="text-info">{{ title }}</h1>
        <!-- solution -->
        <p class="lead" v-if="inStock">In Stock</p>
        <p class="lead" v-else>Out of Stock</p>
        <p>Shipping: {{shipping}}</p>
        <ul>
          <li>Available in:</li>
          <ul>
              <li v-for="detail in details">{{ detail }}</li>
          </ul>
        </ul>  
        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundColor: variant.color }">
        </div>
        
        <button class="btn btn-primary m-2" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Add to Cart</button>
        <button class="btn btn-danger" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="removeCart">Remove from Cart</button>
      </div>
    </div>
  </div>`,
    data(){
        return{
            cart: 0,
            product: 'Vue Socks',
            brand: 'Vue Learning',
            description: 'It is used to wear under the shoes!!',
            link: "https://www.google.com",
            inventory: 0,
            selectedVariant: 0,
            onSale:true,
            details:['cotton', 'polyster', 'plastic'],
            variants: [
                {id: 001, color: 'blue', image:"./assets/images/socks_blue.jpg", quantity: 50},
                {id: 002, color:'Green', image:"./assets/images/socks_green.jpg", quantity: 10}
            ],
            sizes: [{kids: 'Small'},{teens: 'Large'},{adults: 'Extra Large'}],
        }        
    },
    methods: {
        addToCart(){
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        removeCart(){
            this.$emit('remove-from-cart')
        },
        updateVariant(index){
            this.selectedVariant = index
        }
    },
    computed: {
        title(){
            return this.brand+' '+':'+this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        shipping(){
            if (this.premium){
                return 'Free'
            }
            return '5.00 AED'
        }
    }
})