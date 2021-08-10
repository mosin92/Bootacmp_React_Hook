const initialValue = {
    List: []
}
export const TodoReudcer = (state = initialValue, action) => {
    // const { data } = action.data ;
    switch (action.type) {
        
        case 'Add_Todo':
            const {data}=action.payload;
            if (data && data.length > 2) {
                return {
                    ...state,
                    List: [
                        ...state.List,
                        action.payload
                    ]
                }
            }
            else return state;
      

        case 'Delete_Todo':
            // const newlist=
            return {
                ...state,
                List: state.List.filter((item) => item.id !== action.id)
            }

        case 'Delete_All':
            return {
                List: []
            }
        case 'Update_Item':
            const index = state.List.findIndex(val => val.id === action.payload.id)
            console.log("Index", index)
            const newArray = [...state.List]
            newArray[index].data = action.payload.name;
            return {
                ...state,
                List: newArray
            }
        default: return state;

    }

}