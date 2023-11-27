import { act, fireEvent, render, waitFor } from "@testing-library/react"
import BodyComponent from "../Body"
import { Provider } from "react-redux"
import store from "../../utils/store"
import {StaticRouter} from "react-router-dom/server"
import { RESTAURANT_API_CALL } from "../../mocks/dummyData"

global.fetch = jest.fn(()=>{
    return    Promise.resolve({
            json:()=>{ return Promise.resolve(RESTAURANT_API_CALL)}
        })
    })
 test("Check if Shimmer is getting loaded or not",()=>{
const body= render(
    <StaticRouter>
    <Provider store={store}>
    <BodyComponent/>
    </Provider>
    </StaticRouter>

)
//console.log(body)
const shimmerElement = body.getByTestId("shimmer")
//console.log(shimmerElement)
expect(shimmerElement.children.length).toBe(10)
}) 

test("Check if all restaurants are loading on Homepage",async()=>{

    const body= render(
         <StaticRouter>
         <Provider store={store}>
         <BodyComponent/>
         </Provider>
         </StaticRouter>
 
     )
     //console.log(body)
     await waitFor(()=>expect(body.getByTestId("restaurants")))
     const restaurantsElement = body.getByTestId("restaurants")
     //console.log(restaurantsElement)
     expect(restaurantsElement.children.length).toBe(20)
 })
 
 test("Search for restaurants on Homepage",async()=>{

    const body= render(
         <StaticRouter>
         <Provider store={store}>
         <BodyComponent/>
         </Provider>
         </StaticRouter>
 
     )
     //console.log(body)
     await waitFor(()=>expect(body.getByTestId("search-btn")))
     
     const inputElement = body.getByTestId("searchbox")
     fireEvent.change(inputElement,{
        target:{
            value:"food",
        },
     })

     console.log(document.documentElement.outerHTML);

     const searchButtonElement= body.getByTestId("search-btn")
   
    //     fireEvent.click(searchButtonElement)
     

    // await waitFor(()=>{
    //     const restaurantsElement = body.getByTestId("restaurants")
    //     console.log(restaurantsElement.children)
    //     expect(restaurantsElement.children.length).toBe(20)
    // })

 })
 