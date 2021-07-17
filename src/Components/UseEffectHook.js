import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const[count,setcount]=useState(0)
    useEffect(()=>{
        console.log("Clicked !")
    },[])
    return (
        <div style={{margin:"30px"}}>
            <h1>Use Effect Hooks </h1>
            <p>{count}</p>
            <button onClick={()=>setcount(count + 1)}>Click !</button>
        </div>
    )
}

export default UseEffectHook
