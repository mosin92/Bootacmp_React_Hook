import React,{useRef,useState} from 'react'

function Form() {
    const name=useRef()
    
     const [show,setshow]=useState()
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Name-User",name.current.value) 
        setshow(name.current.value)
        const username=name.current.value
        if(username===""){
            alert("Please add your name")
        }
    }
    return (
        <div style={{margin:"20%"}}>
            <h1>Uncontrolled Form -Use Ref Hook</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="text">Enter Your sweet Name :</label>
                <br />
                <input type="text" ref={name} />
                <br/>
                <button type="submit" >Submit</button>
            </form>
            <div>
            { show && <h3>Your Sweet Name is {show}</h3>}
            </div>
        </div>
    )
}

export default Form
