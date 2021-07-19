
export const  increment=()=>{
    return {
        type:"Increment",
        payload:10,
    }
}

export const decrement=()=>{
    return{
        type:"Decrement",
        payload:5,
    }
}

export const mulitiply=()=>{
return{
    type:"Multiply",
    payload:5
}
}
export const divide=()=>{
    return{
        type:"Divide",
        payload:5
    }
}