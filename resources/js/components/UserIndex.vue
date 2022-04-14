<template>
    <table class="table-fixed w-full">
        <thead>
            <tr>
                <th>name</th>
                <th>gender</th>
                <th>role</th>
                <th>address</th>
                <th>phone</th>
                <th>email</th>
            </tr>
        </thead>
        <tbody>


            <tr v-for="user in users" :key="user.id">
                <td v-text="user.name"></td>
                <td v-text="user.gender"></td>
                <td v-text="user.role"></td>
                <td v-text="user.address"></td>
                <td v-text="user.phone"></td>
                <td v-text="user.email"></td>
            </tr>


        </tbody>
    </table>
</template>


<script>
import { onMounted } from 'vue';

import useUsers from '../services/userservices.js'

export default  {
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
