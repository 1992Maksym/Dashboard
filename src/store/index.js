import { createStore } from 'vuex';
import customersData from 'modules/customers-data.js'
import axios from "axios";

export default createStore({
    modules: {
        customersData,
    },
    state() {
        return {
            customers: [],
            path: 'https://dashboard-926ef-default-rtdb.firebaseio.com/customers.json'
        }
    },
    mutations: {
        async getCustomers(state) {
            state.customers = await axios.get(state.path);
        }
    }
})