import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment } from './Actions'


function ReduxHooks() {
    const value = useSelector(state => state.NumberReducer)
    const dispatch=useDispatch()
    console.log(value)
    return (
        <div style={{margin:'10% auto',width:"30%"}}>
           <h1>Redux Hooks Practice</h1>
           <p>Value: {value}</p>
           <button onClick={()=>dispatch(increment())}>Increment</button>
           <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default ReduxHooks
