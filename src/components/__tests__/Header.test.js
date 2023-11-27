import { render } from "@testing-library/react"
import Header from "../Header"
import {Provider} from "react-redux"
import store from "../../utils/store"
import {StaticRouter} from "react-router-dom/server"
test("Logo should be loaded on rendering herader",()=>{

    const header=render(
    <StaticRouter>
    <Provider store={store}><Header/></Provider>
    </StaticRouter>
    )

   // console.log(header)

   //to check if logo is there or not
   const logo = header.getByTestId("logo")
   //console.log(logo)

   expect(logo.src).toBe("http://localhost/dummy.jpeg") 
})

test("Status shold be online while rendering header",()=>{

    const header=render(
    <StaticRouter>
    <Provider store={store}><Header/></Provider>
    </StaticRouter>
    )

   // console.log(header)

   //to check if logo is there or not
   const statusElement = header.getByTestId("online-status")
  // console.log(statusElement)

   expect(statusElement.innerHTML).toBe("Online") 
})

test("The cart should have 0 items initially",()=>{

    const header=render(
    <StaticRouter>
    <Provider store={store}><Header/></Provider>
    </StaticRouter>
    )

   // console.log(header)

   //to check if logo is there or not
   const cartElement = header.getByTestId("cart")
  // console.log(cartElement)

   expect(cartElement.innerHTML).toBe("Cart(0)") 
})