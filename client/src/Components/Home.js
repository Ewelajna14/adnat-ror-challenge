import FirstLogin from "./FirstLogin"
import MyOrganization from "./MyOrganization"
import {useHistory} from 'react-router-dom'

function Home({user, setUser}){

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

 

    if(user.organization_id === null) {
    return(
        <div>
        <h1>Adnat</h1>
            <p>Logged in as {user.name}
             <button onClick={handleLogout}> Log Out</button>
            </p>
        <FirstLogin user={user} setUser={setUser}/>
        </div>
    )
    }

    return(
        <div>
        <h1>Adnat</h1>
        <p>Logged in as {user.name}
         <button onClick={handleLogout}> Log Out</button>
        </p>
        <MyOrganization user={user} setUser={setUser}/>
        </div>
    ) 


}

export default Home