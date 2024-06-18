import axios from "axios";

export default {
    namespaced: true,
    state() {
        return {
            customers: [],
            path: 'https://customers-88b9b-default-rtdb.firebaseio.com/customers.json'
        }
    },
    mutations: {
        async getCustomers(state) {
            state.customers = await axios.get(state.path);
        }
    },
    getters: {
        getData(state) {
            return state.customers.data
        }
    }
}