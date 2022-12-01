import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import MainDashboard from "../../Layout/MainDashboard";
import AllBookingProducts from "../../Pages/Dashboard/BookingProducts/AllBookingProducts";
import MybookingOnly from "../../Pages/Dashboard/BookingProducts/MybookingOnly";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ReportedItems from "../../Pages/Dashboard/Dashboard/ReportedItems";
import AllUsers from "../../Pages/Dashboard/Dashboard/Users/AllUsers";
import AllUsersSeller from "../../Pages/Dashboard/Dashboard/Users/AllUsersSeller";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import AddProduct from "../../Pages/Home/ProductsAndCategory/AddProduct";
import CategoryProduct from "../../Pages/Home/ProductsAndCategory/CategoryProduct";
import MyProduct from "../../Pages/Home/ProductsAndCategory/MyProduct";
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
                loader: () => fetch('https://retails-mart-server.vercel.app/category/Asus'),
                element: <CategoryProduct></CategoryProduct>
            },
            {
                path: 'dell',
                loader: () => fetch('https://retails-mart-server.vercel.app/category/Dell'),
                element: <CategoryProduct></CategoryProduct>
            },
            {
                path: 'lenovo',
                loader: () => fetch('https://retails-mart-server.vercel.app/category/Lenovo'),
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
                path: 'mybooking',
                element: <PrivetRoutes><MybookingOnly></MybookingOnly></PrivetRoutes>
            },
            {
                path: 'addproduct',
                element: <PrivetRoutes><AddProduct></AddProduct></PrivetRoutes>
            },
            {
                path: 'registerseller',
                element: <SellerReg></SellerReg>
            },
            {
                path: 'myproduct',
                element: <PrivetRoutes><MyProduct></MyProduct></PrivetRoutes>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoutes><MainDashboard></MainDashboard></PrivetRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
            },
            {
                path: '/dashboard/allbooking',
                element: <AllBookingProducts></AllBookingProducts>,
            },
            {
                path: '/dashboard/allusers',
                loader: () => fetch('https://retails-mart-server.vercel.app/users'),
                element: <AllUsers></AllUsers>,
            },
            {
                path: '/dashboard/sellers',
                loader: () => fetch('https://retails-mart-server.vercel.app/users/seller'),
                element: <AllUsersSeller></AllUsersSeller>,
            },
            {
                path: '/dashboard/buyer',
                loader: () => fetch('https://retails-mart-server.vercel.app/users/buyer'),
                element: <AllUsers></AllUsers>,
            },
            {
                path: '/dashboard/reported',
                loader: () => fetch('https://retails-mart-server.vercel.app/users/buyer'),
                element: <ReportedItems></ReportedItems>,
            },
        ]

    }
])