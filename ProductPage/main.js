const app = Vue.createApp({
    data(){
        return{
            cart: 0,
            extraDetails: 
                `1. Think about the who, what, when, where, why and how before writing.
                This method is often used by journalists to provide facts in their stories and it is the first step in crafting a product description.            
                Who is this product for? The target audience can be gender (i.e. male or female), an age group (i.e. college students or retirees), a lifestyle demographic (i.e. new mothers or car enthusiasts) or some other defined group of people.
                What are the product’s basic details? This includes attributes such as dimensions, materials, product features, cost and functions.
                When should someone use the product? Is it meant to be used during a certain time of day, seasonally or for a specific type of occasion? Just as important is pointing out if a product can or should be used every day or year-round. These details will help speak to the product’s long-term value.
                Where should someone use the product? Is it meant for indoor or outdoor use, for your car or your home?
                Why is this product useful or better than the competition? This can be anything from quality to value to features. Think about the product benefits to your customers and consider how images can complement your product copy.
                How does the product work? This may not be necessary for every product, but it’s a must-have feature if you are selling anything with moving parts or electronics.
                Let’s now dive into ways to make your product pages and landing pages shine.`,
            feedbacklist:[],
        }
    },
    methods:{
        updateCart(){
            this.cart += 1
        },
        submitFeedback(feedback){
            this.feedbacklist.push(feedback)
            console.log(feedback)            
        }
    }
})
