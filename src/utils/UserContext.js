import {createContext} from "react"


const UserContext = createContext({
    user:{
        name:"John doe",
        email:"unknown@gmaail.com"
    }
})

export default UserContext;