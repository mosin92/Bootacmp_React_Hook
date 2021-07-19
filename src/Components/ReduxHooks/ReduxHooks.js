import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { decrement, divide, increment, mulitiply } from './Actions'


function ReduxHooks() {
    const value = useSelector(state => state.NumberReducer)
    const mulstate = useSelector(state => state.MulReducer)
    const dispatch=useDispatch()
    console.log(value)
    return (
        <div style={{margin:'10% auto',width:"30%"}}>
           <h1>Redux Hooks Practice</h1>
           <p>Value: {value}</p>
           <button style={{margin:"20px"}} onClick={()=>dispatch(increment())}>Increment</button>
           <button style={{margin:"20px"}} onClick={()=>dispatch(decrement())}>Decrement</button>

           <br />
           <b>----------------------------------------------------------</b>
           <br />
           <p>{mulstate}</p>
           <button style={{margin:"20px"}} onClick={()=>dispatch(mulitiply())}>Multiply</button>
           <button style={{margin:"20px"}} onClick={()=>dispatch(divide())}>Divide</button>
        </div>
    )
}

export default ReduxHooks
