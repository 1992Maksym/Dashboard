import { createStore } from 'vuex';
import customersData from 'modules/customers-data.js'

export default createStore({
    modules: {
        customersData,
    },
    state() {
        return {
            customers: [],
        }
    }
})