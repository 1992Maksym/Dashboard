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
        },
        getFilterCustomers(state, payload) {
            state.customers.data = Object.values(state.customers.data).filter(el => el.name.toLowerCase().includes(payload.value.trim()))
        }
    },
    getters: {
        getData(state) {
            return state.customers.data
        }
    }
}