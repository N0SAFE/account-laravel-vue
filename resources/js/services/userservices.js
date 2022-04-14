import { ref } from "vue";
import axios from 'axios'

export default function useUsers() {
    const users = ref([]);

    const getUsers = async() => {
        // make a request to the laravel api to get all the users
        let response = await axios.get('/api/users')

        // verify if the role store in window is c
        if (role == 'c') {
            // filter the response api array by role
            users.value = response.data.data.filter(obj => obj.role = "m");
        } else {
            users.value = response.data.data
        }
    }

    return {
        users,
        getUsers

    }
}