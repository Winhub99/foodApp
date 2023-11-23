import {useState,useEffect} from "react"
import {FETCH_RESTAURANTS_URL} from "../config/CONSTANTS"
const useFetchRestaurants =()=>{
    const [restaurants,setRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]) 
    
    useEffect(()=>{
        fetchRestaurants();
  },[])

  async function fetchRestaurants(){
    const rawData= await fetch(FETCH_RESTAURANTS_URL)
    const jsonData = await rawData.json()
    //console.log(jsonData)
    const data = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //console.log(data)
    setRestaurants(data)
    setFilteredRestaurants(data)
  }

  return [restaurants,filteredRestaurants]
}

export default useFetchRestaurants;