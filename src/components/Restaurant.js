import {IMG_CDN_URL} from '../config/CONSTANTS'

const RestaurantCard = ({name,avgRating,cuisines,cloudinaryImageId}) =>{
    return(
        <div className='restaurant-card'>
            <img src={IMG_CDN_URL+cloudinaryImageId}></img>
            <h2>{name}</h2>
            <h3>{avgRating} stars </h3>
            <h4>{cuisines.join(",")}</h4>
        </div>
    )
  }
  export default RestaurantCard;