const vm = Vue.createApp({
    data () {
        return {
            firstName: 'hauphvn'
        }
    }
}).mount('#app')

vm.$data.firstName = 'caphe';
