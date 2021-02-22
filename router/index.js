import VueRouter from "vue-router"

import LoginForm from "../src/components/LoginForm"
import RegistrationForm from "../src/components/RegistrationForm"

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: LoginForm
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