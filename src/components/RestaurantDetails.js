import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import {IMG_CDN_URL} from "../config/CONSTANTS"
import Shimmer from "./Shimmer"
import useRestaurant from "../utils/useRestaurant"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"

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


    const dispatch = useDispatch()
    const handleAddItem =(item)=>{
        dispatch(addItem(item))
    }
    return(
        <div className="menu flex" >
            <div>
                <h1>The Details of restaurant</h1>

                <p>The restaurant name is: {restaurant?.data?.cards[0]?.card?.card?.info?.name} </p>
                <img src={IMG_CDN_URL +restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}></img>
                <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.city}</h3>
                <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.cuisines.join(",")}</h3>
                <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>

            </div>
            <div className="m-2">
                <h1>Menu</h1>
                {/* <button className="p-2 m-2 bg-green-400" onClick={()=>handleAddItem()}>Add Item</button> */}
                <ul>
                    {menu.map((item)=>(<li key={item?.card?.info?.id}>{item?.card?.info?.name}
                    <button className="bg-green-300 m-1 p-1" onClick={()=>handleAddItem(item)}>Add</button></li>))}
                </ul>
            </div>

        </div>
    )
}

export default RestaurantDetails;