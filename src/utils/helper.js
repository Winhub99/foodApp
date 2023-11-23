 export function searchRestaurants(search,arr){
    const filterData= arr.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(search.toLowerCase())       
 )
 return filterData;
 }

 