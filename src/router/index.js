import VueRouter from "vue-router"

import Home from "../components/Home"
import LoginForm from "../components/LoginForm"
import RegistrationForm from "../components/RegistrationForm"
import Users from "../components/Users"
import User from "../components/User"
import Chat from "../components/Chat"
import BackgroundedContainer from "../components/BackgroundedContainer";

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: BackgroundedContainer,
            children: [
                { path: '', component: Home },
                { path: 'login', component: LoginForm },
                { path: 'register', component: RegistrationForm }
            ]
        },
        {
            path: "/users",
            component: Users
        },
        {
            path: "/user/:username",
            name: "user",
            component: User
        },
        {
            path: "/chat",
            component: Chat
        }
    ]
})