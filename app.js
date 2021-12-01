const vm = Vue.createApp({
    data () {
        return {
            firstName: 'hau',
            lastname: 'pham',
            url: 'https://www.google.com',
            email: '',
            username: 'username',
            isRed: false,
            selectedTextColor: 'text-color-black'
        }
    },
    computed: {
        fullName () {
            console.log('fullName method was called')
            return `${this.firstName} ${this.lastname}`
        },
        class_circle_red () {
            return {red : this.isRed}
        },
        onSelectedTextColor () {
            return this.selectedTextColor
        }
    },
    methods: {
        onChangeEmail(event) {
            this.email = event.target.value
        },
        onChangeUsername(event) {
            this.username = event.target.value
        }
    },
    watch: {
        username(newValue, oldValue) {
            setTimeout(() => {
                this.username = 'change name'
            }, 3000)
        }
    }
}).mount('#app')

// vm.$data.firstName = 'caphe';
