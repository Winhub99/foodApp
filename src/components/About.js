import { Outlet } from "react-router-dom";
import Profile from "./ClassCOmponents/ProfileClass";
import ProfileFunctionalComponent from "./Profile";

import {Component} from 'react'
import UserContext from "../utils/UserContext";
// const About2 =()=>{
//     return(
//         <div>
//             <h1>About page</h1>
//             <h2>This pagw will contain all details of the product.For ex:</h2>
//             <h4>Swiggy.support@gmail.com</h4>
//             <ProfileFunctionalComponent name={"Amy"}/>
//             <Profile surname={"santiago"}/>
//         </div>
//     )
// }

class About extends Component{

    constructor(props){
    super(props)
    console.log("Parent-constructor")
}

    componentDidMount(){
        console.log("Parent-componentDidMount")
    }

    render(){
        console.log("Parent-render")
        return(            
        <div>
        <h1>About page</h1>
        <UserContext.Consumer>
            {
                ({user})=>(
                    <h2 className="font-bold">{user.name}</h2>
                )
            }
        </UserContext.Consumer>
        <h2>This pagw will contain all details of the product.For ex:</h2>
        <h4>Swiggy.support@gmail.com</h4>
        <ProfileFunctionalComponent name={"Amy"}/>
        {/* <Profile surname={"First name"}/> */}
        {/* <Profile surname={"second name"}/> */}

    </div>           
        )
    }
}

export default About;
