import VueRouter from "vue-router"

import Home from "../components/Home"
import LoginForm from "../components/LoginForm"
import RegistrationForm from "../components/RegistrationForm"
import Users from "../components/Users"

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
        {
            path: "/users",
            component: Users
        },
    ]
})