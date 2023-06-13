import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'

export default function Login() {
    
    const [credentials, setcredentials] = useState({email:"",password:""})
     
    let navigate=useNavigate();

    const handleSubmit= async(e)=>{
          e.preventDefault();
          console.log(JSON.stringify({email:credentials.email,password:credentials.password}));
          const response=await fetch("http://localhost:5000/api/loginuser",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
        })
        const json=await response.json()
        console.log(json);
        if(!json.success){
            alert("Enter valid credentails")
        }

        if(json.success){
          localStorage.setItem("authToken",json.authToken)
          console.log(localStorage.getItem("authToken"));
          navigate("/");
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
      <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address</label>
      <input type="email" className="form-control" name='email' value={Credential.email} id="exampleInputEmail1" onChange={onchange} aria-describedby="emailHelp"/>
      <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
      <input type="password" className="form-control" name='password' value={Credential.passwod}  onChange={onchange} id="exampleInputPassword1"/>
    </div>
    <button type="submit" className="m-3 btn btn-success">Submit</button>
    <Link to="/createuser" className='m-3 btn btn-danger'>New User</Link>
     </form>
     </div>
    </>
  )
}
