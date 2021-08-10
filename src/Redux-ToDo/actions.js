export const addTodo = (data) => {
    return {
        type: "Add_Todo",
        payload:{
            id:new Date().getTime().toString(),
            data
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: "Delete_Todo",
        id
    }
}

export const delete_All_Todo = () => {
    return {
        type: "Delete_All"
    }
}

export const updateItem=(newdata)=>{
    return{
        type:"Update_Item",
        payload:newdata
    }

}