import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Todo() {
    const [inputdata, setinputdata] = useState()
    const [item, setitem] = useState([])
    const [flag, setflag] = useState(false)
    const AddItems = () => {
        if (!inputdata) {
            toast.error("Please Enter Item")
        }
        else {
            setitem([inputdata, ...item])
            setinputdata("")
            setflag(true)
            toast("Item Added Succesfully")
        }

    }
    const DeleteItems = (id) => {
        const NewItems = item.filter((value, index) => {
            return id !== index
        })

        setitem(NewItems)
    }

    const RemoveAllItems = () => {
        setitem([])
        setflag(false)
    }
    return (
        <div style={{ border: '1px solid black', margin: '10% auto', width: "30%", padding: "20px" }}>
            <h1>Todo list</h1>
            <p>Enter your Item</p>
            <input type="text" value={inputdata} onChange={(e) => setinputdata(e.target.value)} />
            <button style={{ marginLeft: '20px' }} onClick={AddItems}>Add Item</button>
            {
                item.map((value, index) => (
                    <>
                        {item && <p key={index} style={{ border: '1px solid black' }}>{value}<span>
                            <button style={{ marginLeft: "30px" }} onClick={() => DeleteItems(index)}>Delete</button></span> </p>}
                    </>
                ))
            }
            <br />
            {
                flag && <button onClick={RemoveAllItems} >Clear List</button>
            }


            <ToastContainer position="top-center" />
        </div>
    )
}

export default Todo
