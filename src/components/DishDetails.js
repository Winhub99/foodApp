import { useDispatch } from "react-redux"
import { IMG_CDN_URL } from "../config/CONSTANTS"
import {removeItem} from "../utils/cartSlice"
const DishDetails = ({dish})=>{

    const dispatch = useDispatch();
    removeDish =(dish)=>{
        console.log("removing item")
        dispatch(removeItem(dish))

    }
    return(
        <div className="w-52 p-2 m-2 shadow-lg active:bg-purple-400">
            <h1 className="font-bold text-xl inline">{dish?.card?.info?.name}</h1>
            <span className="m-1 p-1 w-7 h-7 text-2xl inline-flex justify-center items-center rounded-full text-white bg-red-700" >
                <button onClick={()=>{removeDish(dish)}}>-</button></span>
            <img src={IMG_CDN_URL+dish?.card?.info?.imageId}></img>
            
            <h2 className="font-semibold">{dish?.card?.info?.price/100}</h2>
            <h2 className="italic ">{dish?.card?.info?.category}</h2>
            <h2 className="font-black">{dish?.card?.info?.ratings?.aggregatedRating?.rating}</h2>
        </div>
    )
}

export default DishDetails