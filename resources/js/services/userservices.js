import { ref } from "vue";
import axios from 'axios'

export default function useUsers() {
    const users = ref([]);

    // the token is the auth token use to access the api
    const token = localStorage.getItem('user token');

    const getUsers = async() => {
        // make a request to the laravel api to get all the users
        let response = await axios.get('/api/users', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

        // in this function you can modify the form of the data store in the database (like in the gender field)
        let data = response.data.data.map(function(obj) {
            return {
                address: obj.address,
                created_at: obj.created_at,
                dob: obj.dob,
                email: obj.email,
                email_verified_at: obj.email_verified_at,
                gender: obj.gender == "m" ? "male" : (obj.gender == "f" ? "female" : null),
                id: obj.id,
                name: obj.name,
                phone: obj.phone,
                role: obj.role,
                updated_at: obj.updated_at,
            }
        })

        users.value = data
    }

    return {
        users,
        getUsers
    }
}