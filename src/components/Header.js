import { useState } from "react";
import Logo from '../assets/images/logo.jpeg'
import {Link} from 'react-router-dom'
const HeaderComponent = ()=> {
 
 const [isLoggedIn,setIsLoggedIn] = useState(false)
    return(
        <div className='header-content'>
            <div>
                <a href='/'>
                <img className='logo' src={Logo} alt='Company Logo'/></a>
            </div>
            <div className='header-list'>
                <ul>
                    <Link to={"/"}><li>Home</li></Link>

                   <Link to={"/about"}> <li>About</li></Link>
                    <Link to={"/contact"}><li>Contact</li></Link>
                    <Link to={"/instamart"}><li>Instamart</li></Link>                    
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn? <button onClick={()=>{setIsLoggedIn(false)}}>Logout</button>:<button onClick={()=>{setIsLoggedIn(true)}}>Login</button>}
        </div>
    )
}

export default HeaderComponent;