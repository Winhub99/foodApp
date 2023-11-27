import { useState, useEffect,useContext } from 'react'
import {restaurantList} from '../config/CONSTANTS'
import Shimmer from './Shimmer'
import RestaurantCard from './Restaurant'
import { Link } from 'react-router-dom'
import {searchRestaurants} from '../utils/helper'
import useFetchRestaurants from '../utils/useFetchRestaurants'
import useOnline from '../utils/useOnline'
import UserContext from '../utils/UserContext'

const BodyComponent = ()=>{
    const [searchText, setSearchText] = useState("")
   // const [clicked ,setClicked] = useState("clicked")
   const[restaurants,filteredRestaurants]=useFetchRestaurants()
   const {user,setUser} = useContext(UserContext)
   console.log("rendering body...")
   //console.log(restaurants)

   const isOnline = useOnline()

   if(!isOnline){
    return <h1>You seem to be offline!.Please make sure you have a stable internet connection.</h1>
   }

    return filteredRestaurants.length===0?(<Shimmer/>):(
        <>
        <div className='bg-pink-50'>
        <input data-testid="searchbox" className=' p-2 m-2 mr-0 rounded-l-lg' type='text' value={searchText}  placeholder='Search anything' 
            onChange={(e)=>{setSearchText(e.target.value)}}
        /><button data-testid="search-btn" className='bg-purple-400 p-2 rounded-r-lg  focus:ring' onClick={()=>{
           const data= searchRestaurants(searchText,restaurants)
           console.log(data)
           setFilteredRestaurants(data)
        }}>Search</button>
        <input type='text' value={user.name} onChange={(e)=>{setUser({name:e.target.value})}}/> 
        <h2 className='font-bold text-xl'>{user.name}</h2>
        </div>
        {/* <h1>{clicked}</h1>  */}
        <div className='restaurant-list flex flex-wrap ' data-testid="restaurants">
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