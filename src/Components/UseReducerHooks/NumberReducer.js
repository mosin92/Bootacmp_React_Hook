const number_reducer=(state,action)=>{
if(action.type==="Increment"){
    return state + action.value;
}
if (action.type==="Decrement"){

    return state - action.value;
}
else{
    return state
}
}

export default number_reducer;