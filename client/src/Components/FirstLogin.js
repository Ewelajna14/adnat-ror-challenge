import {useHistory} from 'react-router-dom'

function FirstLogin({user, setUser}){

    let history = useHistory()

    const handleLogout = ()=>{
      fetch("/logout", {
        method: "DELETE"
      })
      .then(res=>{
        if (res.ok){
            setUser(null)
        }
      })
      history.push("/")
    }

    return(
        <div>
            <h1>Adnat</h1>
            <p>Logged in as {user.name}
             <button onClick={handleLogout}> Log Out</button>
             </p>
            <p>You arent't a member of any organisations.<br/>
            Join an existing one or create a new one.
            </p>
            <h2>Organizations</h2>
            <p>PLACE ORGANIZATION COMPONENT HERE</p>
            <h2>Create organisation</h2>
            <form>
                <label for ="name">Name</label>
                <input type="text" name="name"></input><br/>
                <label for="rate">Hourly rate: $</label>
                <input type="number" name="rate"></input><br/>
                <input type="submit" value="Create and Join"/>
            </form>

        </div>
    )
}

export default FirstLogin