import {useState} from 'react'
function ForgotPass(){
    const [mail, setMail] = useState("")

    const handleReset =(e)=>{
       e.preventDefault()
       alert("Email was sent, visit your email to reset password")
       setMail("")
    }

    return(
    <div>
   <p>Forget your password? Provide your email and we will send you a link</p>
   <form onSubmit={handleReset}>
    <label for="email">Email</label>
    <input type="email" name="email" value={mail} onChange={(e)=>setMail(e.target.value)}></input>
    <input type="submit" value="Submit"/>
   </form>
    </div>
    )
}

export default ForgotPass