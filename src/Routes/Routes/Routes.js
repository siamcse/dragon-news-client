import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category/Category";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import News from "../../pages/News/News/News";
import Profile from "../../pages/Others/Profile/Profile";
import TermsAndConditions from "../../pages/Others/TermsAndConditions";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://dragon-news-server-gamma.vercel.app/news')
            },
            {
                path: 'category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://dragon-news-server-gamma.vercel.app/category/${params.id}`)
            },
            {
                path: 'news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://dragon-news-server-gamma.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: 'profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            }
        ]
    }
])