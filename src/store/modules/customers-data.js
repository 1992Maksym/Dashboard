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
        async getFilterCustomers(state, payload) {
            console.log(Object.values(state.customers.data).filter(el => el.name.toLowerCase().includes(payload.value.trim())))
            state.customers.data = Object.values((await axios.get(state.path)).data).filter(el => el.name.toLowerCase().includes(payload.value.trim()))
        }
    },
    getters: {
        getData(state) {
            return state.customers.data
        }
    }
}