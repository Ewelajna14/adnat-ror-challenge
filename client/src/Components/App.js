
import '../App.css';
import { useState, useEffect } from "react"; 
import {Switch, Route, useHistory} from 'react-router-dom'
import LogIn from './LogIn';
import SignUp from './SignUp';
import Home from './Home';
import FirstLogin from './FirstLogin';
import MyOrganization from './MyOrganization';

function App() {

  const [user, setUser] = useState(null);
  const history = useHistory()

  useEffect(()=>{
  fetch("/me").then((r)=>{
    if(r.ok){
      r.json().then((user)=>setUser(user))
    }
  })
  }, [])

  const onLogin = (user)=>{
  setUser(user)
  history.push("/home")
  }
 
  if(!user){
  return (
    <div>
      <Switch>
      <Route exact path="/">
        <LogIn onLogin={onLogin}/>
      </Route>
      <Route exact path="/signup">
        <SignUp onLogin={onLogin}/>
      </Route>
      </Switch>
    </div>
  );
  }

  return(
    <Switch>
    <Route  exact path="/home">
      <Home user={user} setUser={setUser}/>
    </Route>
    <Route  exact path="/organizations">
      <FirstLogin/>
    </Route>
    <Route  exact path="/my">
      <MyOrganization/>
    </Route>
    </Switch>
  )

}

export default App;