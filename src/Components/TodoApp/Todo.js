import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getlocalItems=()=>{
    const list=localStorage.getItem("List")
    console.log("List",list)
    if(list){
        return JSON.parse(list) 

    }
    else{
        return []
    }

}
function Todo() {
    const [inputdata, setinputdata] = useState("")
    const [item, setitem] = useState(getlocalItems())
    const [flag, setflag] = useState(false)
    const [toggleSubmit,settoggleSubmit]=useState(true)
    const [uniqueid,setuniqueid]=useState(null)
    
    const AddItems = () => {
        const newdata={id:new Date().getTime().toString(),name:inputdata}
        if (!inputdata) {
            toast.error("Please Enter Item")
        }
        else if(inputdata &&  !toggleSubmit){
            setitem(
                item.map(value=>{
                    if(uniqueid===value.id){
                        return {...value,name:inputdata}
                    }
                    return value
                })
            )
            settoggleSubmit(true)
            setinputdata("")
            setuniqueid(null)
        }
        else {
            setitem([newdata, ...item])
            setinputdata("")
            setflag(true)
            toast("Item Added Succesfully")
        }

    }
    const DeleteItems = (id) => {
        const NewItems = item.filter((value) => {
            return id !== value.id
        })

        setitem(NewItems)
    }

    const RemoveAllItems = () => {
        setitem([])
        setflag(false)
    }

    const UpdateItems=(id)=>{
        const SelectedItem=item.find(value=>{
            return id ===value.id
        })
        setinputdata(SelectedItem.name)
        setuniqueid(id)
        console.log(SelectedItem)
        settoggleSubmit(false)
    }
    //Add data to loacal Storage

    useEffect(()=>{
    localStorage.setItem('List',JSON.stringify(item))
    console.log("item",item)
    if(item.length<1){
        setflag(false)
    }
    else{
        setflag(true)
    }
     },[item])
    return (
        <div style={{ border: '1px solid black', margin: '10% auto', width: "30%", padding: "20px" }}>
            <h1>Todo list</h1>
            <p>Enter your Item</p>
            <input type="text" value={inputdata} onChange={(e) => setinputdata(e.target.value)} />
            {toggleSubmit ? <button style={{ marginLeft: '20px' }} onClick={AddItems}>Add Item</button> 
            :<button style={{ marginLeft: '20px' }} onClick={AddItems}>Update Item</button> }
           
            {
                item.map((value) => (
                   <div key={value.id}>
                       {item && <p  style={{ border: '1px solid black' }}>{value.name}
                       <span><button style={{ margin: "0px 5px 0px 30px" }} onClick={() => UpdateItems(value.id)}>Update</button></span>
                       <span>
                            <button style={{ marginLeft: "30px" }} onClick={() => DeleteItems(value.id)}>Delete</button></span> </p>}
                   </div>
                        
                   
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
