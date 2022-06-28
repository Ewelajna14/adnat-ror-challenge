import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Error from './Error'

function SignUp({onLogin}){

    const [name, setName]= useState("")
    const [email, setEmail]=useState("")
    const [pass, setPass] = useState("")
    const [passConf, setPassConf] = useState("")
    const [errors, setErrors] = useState([])

    function handleFormSubmit(e){
    e.preventDefault()
      const newUser ={
        name:name,
        email_address: email,
        password: pass,
        password_confirmation: passConf
      }
    
      fetch("/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
      .then((r)=>{
        if(r.ok){
            r.json().then((newUser)=>onLogin(newUser))
        }
        else{
            r.json().then((error)=>setErrors(error.errors) )
        }
      })
     
    }

    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <h1>Adnat</h1>
                <h2>Sign up</h2>
                <label for="name">Name</label><br/>
                <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
                <label for="email" >Email</label><br/>
                <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
                <label for="password">Password</label><br/>
                <input type="password" name="password" value={pass} onChange={(e)=>setPass(e.target.value)}></input><br/>
                <label for="passconfirm">Password confirmation</label><br/>
                <input type="password" name="passconfirm" value={passConf} onChange={(e)=>setPassConf(e.target.value)}></input><br/>
                <input type="submit" value="Sign up"></input><br/>
                <Link to="/">Log in</Link>
            </form> 
            {errors !=0 && errors.map((error)=>(<Error key={error} error={error} />))}
        </div>
    )
}

export default SignUp