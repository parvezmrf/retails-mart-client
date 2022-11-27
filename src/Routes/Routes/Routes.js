import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import MainDashboard from "../../Layout/MainDashboard";
import AllBookingProducts from "../../Pages/Dashboard/BookingProducts/AllBookingProducts";
import MybookingPro from "../../Pages/Dashboard/BookingProducts/MybookingPro";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import CategoryProduct from "../../Pages/Home/ProductsAndCategory/CategoryProduct";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Register from "../../Pages/Register/Register";
import SellerReg from "../../Pages/Register/SellerReg";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'asus',
                loader: () => fetch('http://localhost:5000/category/Asus'),
                element: <CategoryProduct></CategoryProduct>
            },
            {
                path: 'dell',
                loader: () => fetch('http://localhost:5000/category/Dell'),
                element: <CategoryProduct></CategoryProduct>
            },
            {
                path: 'lenovo',
                loader: () => fetch('http://localhost:5000/category/Lenovo'),
                element: <CategoryProduct></CategoryProduct>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'registerseller',
                element: <SellerReg></SellerReg>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <MainDashboard></MainDashboard>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
            },
            {
                path: '/dashboard/allbooking',
                element: <AllBookingProducts></AllBookingProducts>,
            },
        ]

    }
])