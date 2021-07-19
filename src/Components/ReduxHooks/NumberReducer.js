
const initialstate=0;
const NumberReducer=(state= initialstate,action)=>{

    switch(action.type){
        case'Increment':return state + action.payload;
        case 'Decrement':return state + action.payload;
        default : return state;
    }
}

export default NumberReducer;