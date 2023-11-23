import React from "react"
class Profile extends React.Component{

    constructor(props){
        super(props)
        this.state={
           userInfo:{
            name:"john doe",
            location:"unknown"
           }
        };
        console.log("child-Constructor" + this.props.surname)
    }

    async componentDidMount(){
        console.log("child-componentDidMount" + this.props.surname)
        const data = await fetch("https://api.github.com/users/Winhub99")
        const json = await data.json()
        console.log(data)
        this.setState({
            userInfo:json
        })
        this.timer = setInterval(()=>{
            console.log("timer callled")
        },1000)
        
    }

    componentDidUpdate(){
        console.log("component was updated")
        
    }

    componentWillUnmount(){
        console.log("handle long executing process")
        clearInterval(this.timer)
    }
    render(){
        console.log("child-render"+ this.props.surname)
        return(
            <div>
                <h1>THis if from Profile class</h1>
                <img src={this.state.userInfo.avatar_url}></img>
                <h2>The profile of the  person is : {this.state.userInfo.name}</h2>
                <h5>The username of the person is: :{this.state.userInfo.login}</h5>
                
            </div>
        )
    }   
}

export default Profile;
