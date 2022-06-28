import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

function LogIn(){
    return(
        <div>
            <form>
                <h1>Adnat</h1>
                <h2>Log in</h2>
                <label for="email">Email</label><br/>
                <input type="email" name="email"></input><br/>
                <label for="password" >Password</label><br/>
                <input type="password" name="password"></input><br/>
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