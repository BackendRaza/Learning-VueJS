const app = Vue.createApp({
    data(){
        return{
            cart: [],
            premium: false,
            details: ['10 days return policy', 'Easy returns', 'One year warranty'],
        }        
    },
    methods: {
        UpdateCart(id){
            this.cart.push(id)
        },
        removeFromCart(id){
            this.cart.pop(id)
        }
    }
   
})