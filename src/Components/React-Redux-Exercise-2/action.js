export const increment=()=>{
    return{
        type:"Increment",
        payload:10
    }
}

export const decrement=()=>{
    return{
        type:"Decrement",
        payload:5
    }
}