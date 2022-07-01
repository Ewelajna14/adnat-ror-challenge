import {Link} from 'react-router-dom'
import {useState} from 'react'
import Error from './Error'
import ForgotPass from './ForgotPass'

function LogIn({onLogin}){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")
    const [show, setShow] = useState(false)

    const handleSubmit = (e)=>{
     e.preventDefault()
     const user={
        email_address: email,
        password: password
     }
    

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
            r.json().then((error)=> setErrors(error.error))
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
            </form>
            <button onClick={()=>setShow(!show)}>Forgot your password?</button>
            {errors.length !=0 && errors.map((error)=>(<Error key={error} error={error}/>))} 
            {
                show?<ForgotPass/>:null
            }
        </div>
    )
}

export default LogIn