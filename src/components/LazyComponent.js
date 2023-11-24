import { useState } from "react"

const Section =({title,description,showMore,setShowMore,name})=>{

    return (
        <div className="border border-black m-2 p-2">
            <h3 className="font-semibold text-2xl"
            >{title}</h3>

            {showMore?<button onClick={()=>setShowMore("")}>Less</button>:<button onClick={()=>setShowMore(name)}>More</button>}
            {showMore && <h6 className="italic">{description}</h6>}
        </div>
    )
}

const LazyComponent =()=>{

    const [showMore,setShowMore] = useState("about")
    let name;
    return(
        <div><h2 className="text-3xl font-bold m-2 p-2 ">INSTRAMART</h2>
            <h1>Lazy Loaded This component</h1>
            <h3>Assume this is a very heavy component with. A 100 of components</h3>
            <>
                <Section showMore={showMore==="about"} setShowMore={setShowMore} name={"about"}title="About us" description="quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"/>
                <Section showMore={showMore==="product"} setShowMore={setShowMore} name={"product"} title={"Product"} description ="quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"/>
            </>

        </div>
    )
}

export default LazyComponent;