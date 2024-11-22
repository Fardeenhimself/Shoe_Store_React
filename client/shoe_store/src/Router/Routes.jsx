import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Main from "../Layout/Main";
import Cart from "../pages/Cart";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import PrivateRoute from "./private";
import CheckOut from "../pages/CheckOut";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/cart',
                element: <Cart></Cart>,
            },
            {
                path: '/signup',
                element: <Signup></Signup>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            },
            {
                path: '/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            },
        ]
    }
])