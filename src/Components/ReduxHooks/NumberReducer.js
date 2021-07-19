
const initialstate=0;
const NumberReducer=(state= initialstate,action)=>{

    switch(action.type){
        case'Increment':return state + action.payload;
        case 'Decrement':return state + action.payload;
        default : return state;
    }
}


const startingvalue=5;
const MulReducer=(state=startingvalue,action)=>{
    switch(action.type){
        case'Multiply':return state * action.payload;
        case 'Divide':return state / action.payload;
        default : return state;
    }
}

export {MulReducer}
export default NumberReducer;