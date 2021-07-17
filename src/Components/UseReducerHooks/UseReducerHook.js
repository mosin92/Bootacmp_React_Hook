import React, { useReducer } from 'react'
import number_reducer from './NumberReducer';
function UseReducerHook() {
    const initialvalue=0;
    const [count,dispatch]=useReducer(number_reducer,initialvalue)
    return (
        <div style={{margin:"30px"}}>
           <h1>Use Reducer Hooks</h1> 
           
          <p>{count}</p> 
          <button onClick={()=>dispatch({type:"Increment",value:25})}>Increment</button>
          <br/>
          <button onClick={()=>dispatch({type:"Decrement",value:10})}>Decrement</button>
        </div>
    )
}

export default UseReducerHook
