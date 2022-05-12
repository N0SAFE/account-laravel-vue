<template>
    <router-link to="/login" v-on:click="logout" class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full absolute z-10 right-10 top-10 cursor-pointer">Se déconnecter</router-link>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg flex items-center justify-center h-screen px-8 py-10">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        nom
                    </th>
                    <th scope="col" class="px-6 py-3 hidden md:block">
                        genre
                    </th>
                    <th scope="col" class="px-6 py-3">
                        role
                    </th>
                    <th scope="col" class="px-6 py-3 hidden sm:block">
                        address
                    </th>
                    <th scope="col" class="px-6 py-3">
                        telephone
                    </th>
                    <th scope="col" class="px-6 py-3">
                        email
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4" v-text="user.name"> </td>
                    <td class="px-6 py-4 hidden md:block" v-text="user.gender"></td>
                    <td class="px-6 py-4" v-text="user.role"></td>
                    <td class="px-6 py-4 hidden sm:block" v-text="user.address"></td>
                    <td class="px-6 py-4" v-text="user.phone"></td>
                    <td class="px-6 py-4" v-text="user.email"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import { onMounted } from 'vue';

// this is a service to make the request
import useUsers from '../services/userservices.js'

export default  {
    methods:{
        // method use to logout
        logout: function(){
            localStorage.removeItem('user token')
            localStorage.removeItem('user name')
        }
    },
    setup(){
        const {users, getUsers} = useUsers();

        // add the user to the app when the app is mounted
        onMounted(getUsers())

        return {
            users
        }
    }
}

</script>
