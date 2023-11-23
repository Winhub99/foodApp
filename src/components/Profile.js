import  {useEffect, useState}  from "react";

const Profile=(props)=>{

    useEffect(()=>{
        const timer= setInterval(() => {
            console.log("Api called")
        }, 1000)
        return ()=>{ 
            console.log("useEffect return statement") 
            clearInterval(timer)
        }
    }   

    ,[]
    )


    const [count] = useState(10);
    return(
        <div>
            <h1>Profile</h1>
            <h3>The name of the user appears here:{props.name}</h3>
            <h5>The count value is:{count}</h5>
        </div>
    )
}

export default Profile;