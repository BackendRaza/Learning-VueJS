const app = Vue.createApp({
    data(){
        return {
            product: 'Socks',
            description: 'It is used to wear under the shoes!!',
            image: "./assets/images/kewa.png",
            link: "https://www.google.com",
            inStock: false,
            inventory: 11,
            onSale:true,
            details:['cotton', 'polyster', 'plastic'],
            more_details: [{id: 001, color: 'green'},{id: 002, color:'red'}],
            sizes: [{kids: 'Small'},{teens: 'Large'},{adults: 'Extra Large'}],
        }
    }
})