import React, { useState } from 'react'
import './todo.css'
import { addTodo, deleteTodo, delete_All_Todo,updateItem } from './actions'
import { useDispatch, useSelector } from 'react-redux'
import {  FaTrash } from 'react-icons/fa';
function Index() {
    const [value, setvalue] = useState("")
    const list = useSelector(state => state.TodoReudcer.List)
    console.log("List Items", list)
    const dispatch = useDispatch()
    const [togglebtn, settogglebtn] = useState(true)
    const[uniqueid,setuniqueid]=useState()
    const updateField = (id) => {
        settogglebtn(false)
        console.log(id)
        const selectedItem=list.find(item=>item.id ===id)
        console.log("selected Data",selectedItem)
        setvalue(selectedItem.data)
        setuniqueid(id)
        
    }
    const updateList=()=>{
        const data={
            id:uniqueid ,
            name:value
        }

        console.log("Selected updated Data",data)

    // updateList(data)
    dispatch(updateItem(data))
    settogglebtn(true)
    setvalue("")
    console.log("Update List",list)
    }
    return (
        <div className="container">
            <h1>Redux Todo App</h1>
            <h1>
                Enter ToDo List
               
            </h1>
            <div>
                <input type="text" value={value} onChange={(e) => setvalue(e.target.value)} />
                {
                    togglebtn ? <button onClick={() => dispatch(addTodo(value), setvalue(""))}>ADD Item</button>
                        : <button onClick={()=>updateList()}>Update Item</button>
                }

            </div>
            <div>
                <h2>List of Items</h2>
                {
                    list.map(item => (

                        <div key={item.id}>
                            <div className="list">
                                {item.data}

                            </div>
                            <div>

                                <button onClick={() => updateField(item.id)}>Update Items</button>
                            </div>
                            <div>
                                <FaTrash className="icons" onClick={() => dispatch(deleteTodo(item.id))} />
                            </div>
                        </div>


                    ))
                }
                <div>
                    {
                        list && <button onClick={() => dispatch(delete_All_Todo())}>Delete All</button>
                    }

                </div>
            </div>
        </div>
    )
}

export default Index
