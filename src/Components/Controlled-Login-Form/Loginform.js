import React, { useState } from 'react'

function Loginform() {
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const[userdata,setuserdata]=useState([])
    const handlesubmit=(e)=>{
        e.preventDefault();
        const data={id:new Date().getTime().toString(),email,password}  //destructure the object
        if(email && password ){
            
        setuserdata([...userdata,data])
        setemail("")
        setpassword("")
        }
        else{
            alert("Please fill data")
        }

        console.log("data",data)
        console.log("userdata",userdata)
    }
    return (
        <div style={{margin:"30px"}}>
            Login Form
            <br/>
            <form onSubmit={handlesubmit}>
                <div>
                   <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" autoComplete="off" value={email}
                 onChange={(e)=>setemail(e.target.value)} /> 
                </div>
                <br />
                <div>
                   <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" autoComplete="off"
                value={password} onChange={(e)=> setpassword(e.target.value)} /> 
                </div>
                <button type="submit">LogIn</button>
            </form>
            {
                userdata.map(value=>{
                    const {id,email,password}=value
                    return(
                        <div key={id} style={{border:"1px solid black",margin:"20px"}}>
                            Email : {email}
                            <br />
                            Password : {password}
                            <br/>
                            </div>

                    )
                })
            }
        </div>
    )
}

export default Loginform
