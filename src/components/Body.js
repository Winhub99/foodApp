import { useState, useEffect } from 'react'
import {restaurantList} from '../config/CONSTANTS'
import Shimmer from './Shimmer'
import RestaurantCard from './Restaurant'
import { Link } from 'react-router-dom'
import {searchRestaurants} from '../utils/helper'
import useFetchRestaurants from '../utils/useFetchRestaurants'
import useOnline from '../utils/useOnline'

const BodyComponent = ()=>{
    const [searchText, setSearchText] = useState("")
   // const [clicked ,setClicked] = useState("clicked")
   const[restaurants,filteredRestaurants]=useFetchRestaurants()
   console.log("rendering body...")
   //console.log(restaurants)

   const isOnline = useOnline()

   if(!isOnline){
    return <h1>You seem to be offline!.Please make sure you have a stable internet connection.</h1>
   }

    return filteredRestaurants.length===0?(<Shimmer/>):(
        <>
        <input type='text' value={searchText}  placeholder='Search anything' 
            onChange={(e)=>{setSearchText(e.target.value)}}
        /><button onClick={()=>{
           const data= searchRestaurants(searchText,restaurants)
           console.log(data)
           setFilteredRestaurants(data)
        }}>Search</button>
        {/* <h1>{clicked}</h1>  */}
        <div className='restaurant-list'>
            {filteredRestaurants.map((restaurant)=>{
                return (                 
                <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id} >
                <RestaurantCard {...restaurant.info} /></Link>)
            })}
        </div>
        </>    
    )
}

export default BodyComponent;