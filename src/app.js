import React, {Suspense, lazy} from 'react'
import  ReactDOM  from 'react-dom/client'
import HeaderComponent from './components/Header'
import BodyComponent from './components/Body'
import FooterComponent from './components/Footer'
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import About from  './components/About'
import Error from './components/Error'
import Contact from './components/Contact'
import RestaurantDetails from './components/RestaurantDetails'
import Profile from './components/Profile'
// import LazyComponent from './components/LazyComponent'

const LazyComponent = lazy(()=>{return import("./components/LazyComponent")})
const AppLayout =()=>{
    return(
        <>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<BodyComponent/>
            },
            {
                path:"/about",
                element:<About/>,
                children:[
                    {
                        path:"profile",
                        element:<Profile/>
                    }
                ]
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/instamart",
                element:<Suspense fallback={<h1>Loading...</h1>}><LazyComponent/></Suspense>
            },
            {
                path:"restaurant/:id",
                element:<RestaurantDetails/>
            }

        ]
    },
   
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)