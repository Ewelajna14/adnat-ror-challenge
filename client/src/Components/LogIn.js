import {Link} from 'react-router-dom'

function LogIn(){
    return(
        <div>
            <form>
                <h1>Adnat</h1>
                <h2>Log in</h2>
                <label for="email">Email</label><br/>
                <input type="text" name="email"></input><br/>
                <label for="password" >Password</label><br/>
                <input type="password" name="password"></input><br/>
                <input type="checkbox" id="rememberMe"></input><br/>
                <label for ="rememberMe"> Remember me</label><br/>
                <input type="submit" value="Log in"></input><br/>
                <a href="/">Sign up</a> <br/>
                <a href="/">Forgot your password?</a>
            </form> 

        </div>
    )
}

export default LogIn