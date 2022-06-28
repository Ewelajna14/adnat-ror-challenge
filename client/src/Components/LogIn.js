import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

function LogIn({onLogin}){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e)=>{
     e.preventDefault()
     const user={
        email_address: email,
        password: password
     }
     console.log(user)

    fetch("/login", {
        method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
     })
     .then((r)=>{
        if(r.ok){
            r.json().then((user)=>onLogin(user))
        }
        else{
            r.json().then((error)=> console.log(error))
        }
     })

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Adnat</h1>
                <h2>Log in</h2>
                <label for="email">Email</label><br/>
                <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
                <label for="password" >Password</label><br/>
                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br/>
                <input type="checkbox" id="rememberMe"></input><br/>
                <label for ="rememberMe"> Remember me</label><br/>
                <input type="submit" value="Log in"></input><br/>
                <Link to="signup">Sign up</Link> <br/>
                <a href="/">Forgot your password?</a>
            </form> 

        </div>
    )
}

export default LogIn