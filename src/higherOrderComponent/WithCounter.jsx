import React from "react";

const WithCounter = (OriginalComponent) =>{
  
    class newComponent extends React.Component{

        state = {
            count : 0
        }

        incrementCount =()=>{
          this.setState((prev)=>({
            count : prev.count + 1
          }))  
        }
      
        render(){
         const {counter} = this.state;

            return <OriginalComponent counter={counter} setCounter = {this.incrementCount}/>
        }


    }

    return <newComponent/>
}

export default WithCounter;