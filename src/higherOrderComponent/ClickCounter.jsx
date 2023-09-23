import WithCounter from "./WithCounter";

const ClickCounter = (props) => {

    const {counter,setCounter} = props;
 return (

     <div>
         <button onClick={setCounter}>{counter}</button>
         <h1>gdgargs  dsgWEAGE</h1>
     </div>

 )


}

export default WithCounter(ClickCounter)