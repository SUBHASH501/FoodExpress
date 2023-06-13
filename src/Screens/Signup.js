import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})
    
    const handleSubmit= async(e)=>{
          e.preventDefault();
          console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation}));
          const response=await fetch("http://localhost:5000/api/createuser",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
        })
        const json=await response.json()
        console.log(json);
        if(!json.success){
            alert("Enter valid credentails")
        }
    }

    const onchange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }

  return (
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" name='name' value={credentials.name} onChange={onchange}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address</label>
      <input type="email" className="form-control" name='email' value={Credential.email} id="exampleInputEmail1" onChange={onchange} aria-describedby="emailHelp"/>
      <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
      <input type="password" className="form-control" name='password' value={Credential.passwod}  onChange={onchange} id="exampleInputPassword1"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputAddress1" className="htmlForm-label">Address</label>
      <input type="text" className="form-control"  name='geolocation' value={Credential.geolocation} onChange={onchange} id="exampleInputAddress1"/>
    </div>
    <button type="submit" className="m-3 btn btn-success">Submit</button>
    <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
     </form>
     </div>
    </>
  )
}
