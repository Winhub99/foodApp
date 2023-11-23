import {useEffect, useState} from 'react'
const useRestaurant=(id)=>{
    const [restaurant,setRestaurant] = useState({})
    const [menu,setMenu] =useState([])
    useEffect(()=>{
        fetchDetails()
    },[])

    async function fetchDetails(){
     const rawData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER")
     const jsonData = await rawData.json()
     console.log(jsonData)
     setRestaurant(jsonData)
    setMenu(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
     console.log(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    }

    return [restaurant,menu]
}

export default useRestaurant;
