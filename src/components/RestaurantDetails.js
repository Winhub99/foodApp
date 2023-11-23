import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import {IMG_CDN_URL} from "../config/CONSTANTS"
import Shimmer from "./Shimmer"
import useRestaurant from "../utils/useRestaurant"

const RestaurantDetails =()=>{
    const params= useParams()
    const {id} = params
    const [restaurant,menu] = useRestaurant(id)
    if(!restaurant){
        return <Shimmer/>
    }
    if(!menu){
        return <Shimmer/>
    }

    return(
        <div className="menu">
            <div>
                <h1>The Details of restaurant</h1>
                <p>The restaurant name is: {restaurant?.data?.cards[0]?.card?.card?.info?.name} </p>
                <img src={IMG_CDN_URL +restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}></img>
                <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.city}</h3>
                <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.cuisines.join(",")}</h3>
                <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>

            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {menu.map((item)=>(<li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>))}
                </ul>
            </div>

        </div>
    )
}

export default RestaurantDetails;