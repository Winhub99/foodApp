import {IMG_CDN_URL} from '../config/CONSTANTS'
import {useContext} from "react"
import UserContext from '../utils/UserContext'
const RestaurantCard = ({name,avgRating,cuisines,cloudinaryImageId}) =>{
    const {user} = useContext(UserContext)
    return(
        <div className='restaurant-card w-[200px] p-2 m-2 shadow-lg active:bg-purple-400'>
            <img src={IMG_CDN_URL+cloudinaryImageId}></img>
            <h2 className='font-bold text-xl'>{name}</h2>
            <h3 >{avgRating} stars </h3>
            <h4>{cuisines.join(",")}</h4>
            <h4 className='font-semibold text-lg'>{user.name}</h4>
        </div>
    )
  }
  export default RestaurantCard;