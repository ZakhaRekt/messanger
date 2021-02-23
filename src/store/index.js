import { createStore } from 'vuex'
import { createApp } from 'vue'
import App from "../App"

const store = createStore({
    state () {
        return {
            count: 1
        }
    }
})
const app = createApp({App})
app.use(store)
store.commit('increment')

console.log(store.state.count) // -> 1