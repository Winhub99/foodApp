import { useDispatch, useSelector } from "react-redux";

import store from "../utils/store"
import DishDetails from "./DishDetails";
import { clearCart } from "../utils/cartSlice";
const CartComponent = ()=>{
     const cartItems = useSelector(store =>store.cart.items)
     console.log(cartItems)
     const dispatch = useDispatch()

     emptyCart=()=>{
        dispatch(clearCart())
     }

    return (
        <>
        <div className="flex">
        <h1 className="font-bold text-2xl">Cart</h1>
        <button className="ml-2 p-1 bg-green-500" onClick={()=>emptyCart()}>ClearCart</button>
        </div>
        <div className="flex ">            
            {cartItems.map((item)=>(<DishDetails key={item.card?.info?.id} dish={item}/>))}
        </div>
        </>
    )
}

export default CartComponent;