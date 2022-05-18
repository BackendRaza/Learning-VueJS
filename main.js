const app = Vue.createApp({
    data(){
        return{
            cart: 0,
            product: 'Socks',
            brand: 'Vue Learning',
            description: 'It is used to wear under the shoes!!',
            link: "https://www.google.com",
            inventory: 0,
            selectedVariant: 0,
            onSale:true,
            details:['cotton', 'polyster', 'plastic'],
            variants: [
                {id: 001, color: 'midnightblue', image:"./assets/images/sock_black.jpg", quantity: 50},
                {id: 002, color:'Grey', image:"./assets/images/sock_white.jpg", quantity: 0}
            ],
            sizes: [{kids: 'Small'},{teens: 'Large'},{adults: 'Extra Large'}],
        }        
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        removeCart(){
            this.cart -= 1
        },
        updateVariant(index){
            this.selectedVariant = index
        }
    },
    computed: {
        title(){
            return this.brand+' '+this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        }
    }
})