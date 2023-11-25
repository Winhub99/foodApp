import React, {Suspense, lazy, useState} from 'react'
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
import UserContext from './utils/UserContext'
// import LazyComponent from './components/LazyComponent'
import {Provider} from "react-redux"
import store from './utils/store'
import CartComponent from "./components/CartComponent"
const LazyComponent = lazy(()=>{return import("./components/LazyComponent")})
const AppLayout =()=>{
    const [user,setUser] = useState({
        name:"Vinny",
        email:"Vin@hub.com"
    })

    return(
    <Provider store={store}>
        <UserContext.Provider value={{user:user,setUser:setUser,}}>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </UserContext.Provider>
        </Provider>
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
            },
            {
                path:"cart",
                element:<CartComponent/>

            }

        ]
    },
   
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)