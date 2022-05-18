app.component('product-details',{
    props:{
        details:{
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="container mt-3">
    <p class="p" v-for="detail in details">{{ detail }}</p>
    </div>`,
    computed:{
        detail(){
            return this.details
        }
    }
})