import React from "react"
export default class Counter extends React.Component{
    constructor(props){
     super(props)
    }

    state = {
        count : 0
    };

    incrementCount =()=>{
      this.setState(
      (prev) =>(
        {
            count: prev.count + 1
        } 
      )
      
      )
    }

    render(){
       const {count} = this.state;
        // const clickMe =()=>{
        //   alert("button is clicked")
        // }
        return <div>
         <button onClick={this.incrementCount}>Click {count} times</button>
        </div>
    }
} 