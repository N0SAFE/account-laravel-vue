<template>
    <div class="flex items-center justify-center h-screen">
        <div class="bg-gray-800 flex flex-col w-100 border border-gray-900 rounded-lg px-8 py-10">
            <div class="text-white mt-10">
                <h1 class="font-bold text-4xl">Bonjour</h1>
                <p class="font-semibold">Connecté vous!</p>
            </div>
            <form v-on:submit="login" class="flex flex-col space-y-8 mt-10">
                <input type="text" placeholder="Email" class="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500" v-model="email">
                <input type="text" placeholder="Mot de passe" class="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500" v-model="password">
                <button class="border border-blue-500 bg-blue-500 text-white rounded-lg py-3 font-semibold">Envoyé</button>
                <router-link to="/register">pas encore de compte ? inscrivez-vous</router-link>
            </form>
        </div>
    </div>
</template>

<script>
    // use the axios librairie to make the ajax request to the api
    import axios from "axios"

    export default {
        // var declaration
        data: function(){
            return {
                email: "",
                password: "",
            }
        },
        methods: {
            // function call when the form is submit
            login(e){
                e.preventDefault() // it prevent from page reload
                // requet to the api/login that handle the email and the password
                axios.post("/api/login",
                {
                    email: this.email, password: this.password
                },
                {
                    validateStatus: () => true
                }).then(res => {
                    if(res.status == 200){
                        localStorage.setItem('user token', res.data.data.token)
                        localStorage.setItem('user name', res.data.data.name)
                        window.location.href = "/"
                    }
                    // TODO: make the error flash message
                    console.log(res.status)
                })
            }
        }
    }
</script>
