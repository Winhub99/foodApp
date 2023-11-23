import { useEffect, useState } from "react"

const useOnline=()=>{

    const [isOnline,setIsOnline]= useState(true)

    
    useEffect(()=>{
        function userOnline(){
            setIsOnline(true)
        }
        function userOffline(){
            setIsOnline(false)
        }
            window.addEventListener("online",userOnline)
        
            window.addEventListener("offline",userOffline)
     
            
            return ()=>{
                removeEventListener("online",userOnline)
            removeEventListener("offline",userOffline)            }
    },[])

    return isOnline
}

export default useOnline;