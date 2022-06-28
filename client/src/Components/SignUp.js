function SignUp(){
    return(
        <div>
            <form>
                <h1>Adnat</h1>
                <h2>Sign up</h2>
                <label for="name">Name</label><br/>
                <input type="text" name="name"></input><br/>
                <label for="email" >Email</label><br/>
                <input type="email" name="email"></input><br/>
                <label for="password">Password</label><br/>
                <input type="password" name="password"></input><br/>
                <label for="passconfirm">Password confirmation</label><br/>
                <input type="password" name="passconfirm"></input><br/>
                <input type="submit" value="Sign up"></input><br/>
                <a href="/">Log in</a>
            </form> 

        </div>
    )
}

export default SignUp