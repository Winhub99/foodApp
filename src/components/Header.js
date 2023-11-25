import { useState } from "react";
import Logo from '../assets/images/logo.jpeg'
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import store from "../utils/store";
const HeaderComponent = ()=> {
 
 const [isLoggedIn,setIsLoggedIn] = useState(false)
 const cartItems = useSelector(store =>store.cart.items)
    return(
        <div className='header-content flex justify-between  bg-pink-50 '>
            <div>
                <a href='/'>
                <img className='logo h-28 p-2' src={Logo} alt='Company Logo'/></a>
            </div>
            <div className='header-list mt-9 '>
                <ul className="flex space-x-2 shadow-sm ">
                    <Link to={"/"}><li>Home</li></Link>
                   <Link to={"/about"}> <li>About</li></Link>
                    <Link to={"/contact"}><li>Contact</li></Link>
                    <Link to={"/instamart"}><li>Instamart</li></Link>                    
                    <Link to={"/cart"}><li>Cart({cartItems.length})</li></Link>
                    {/* {console.log(cartItems)} */}
                </ul>
            </div>
            {isLoggedIn? <button onClick={()=>{setIsLoggedIn(false)}}>Logout</button>:<button onClick={()=>{setIsLoggedIn(true)}}>Login</button>}
        </div>
    )
}

export default HeaderComponent;