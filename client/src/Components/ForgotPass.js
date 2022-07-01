function ForgotPass(){
    return(
    <div>
   <p>Forget your password? Provide your email and we will send you a link</p>
   <form>
    <label for="email">Email</label>
    <input type="email" name="email"></input>
    <input type="submit" value="Submit"/>
   </form>
    </div>
    )
}

export default ForgotPass