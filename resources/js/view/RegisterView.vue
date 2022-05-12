<template>
  <div class="flex items-center justify-center h-screen">
    <div class="bg-gray-800 flex flex-col w-auto border border-gray-900 rounded-lg px-10 py-10">
      <div class="text-white mt-10">
        <h1 class="font-bold text-4xl">Bonjour</h1>
        <p class="font-semibold">Créez votre compte !</p>
      </div>
      <form v-on:submit="register" class="flex flex-col space-y-8 mt-10">
        <input required type="text" placeholder="Name" class="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500" v-model="name">
        <input required type="text" placeholder="Email" class="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500" v-model="email">
        <input required type="text" placeholder="mot de passe" class="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500" v-model="password">
        <input required type="text" placeholder="confimation mot de passe " class="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500" v-model="c_password">
        <div class="flex gap-3 flex-col md:flex-row">
            <div class="flex gap-2 flex-col">
                <span>genre</span>
                <select required v-model="gender" class="form-select border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500">
                    <option disabled value="">Choisissez</option>
                    <option value="m">male</option>
                    <option value="f">female</option>
                </select>
            </div>
            <div class="flex gap-2 flex-col">
                <span>année de naissance</span>
                <input required type="date" class="w-full border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500" v-model="dob">
            </div>
        </div>
        <input required type="text" placeholder="telephone" class="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500" v-model="phone">
        <input required type="text" placeholder="address" class="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500" v-model="address">
        <button class="border border-blue-500 bg-blue-500 text-white rounded-lg py-3 font-semibold">Envoyé</button>
        <router-link to="/login">deja un compte ? connecter-vous</router-link>
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
                name: "",
                email: "",
                password: "",
                c_password: "",
                gender: "",
                dob: "",
                phone: "",
                address: ""
            }
        },
        methods: {
            // function call when the form is submit
            register(e){
                console.log(this.dob)
                e.preventDefault() // it prevent from page reload
                // requet to the api/login that handle all the information passed in the form
                axios.post("/api/register", {
                    email: this.email,
                    password: this.password,
                    c_password: this.c_password,
                    name: this.name,
                    gender: this.gender,
                    dob: this.dob,
                    phone: this.phone,
                    address: this.address
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
                    console.log(res)
                })
            }
        }
    }
</script>
