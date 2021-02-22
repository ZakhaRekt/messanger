import VueRouter from "vue-router"

import Home from "../src/components/Home"
import LoginForm from "../src/components/LoginForm"
import RegistrationForm from "../src/components/RegistrationForm"

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/login",
            component: LoginForm
        },
        {
            path: "/register",
            component: RegistrationForm
        },
    ]
})