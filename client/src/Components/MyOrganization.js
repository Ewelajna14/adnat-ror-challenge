import Shifts from "./Shifts"
import {useState} from 'react'

function MyOrganization({user, setUser}){

    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(user.organization.name)
    const [rate, setRate] = useState(user.organization.hourly_rate)

    const leaveOrg = () =>{
        const leave = {
            organization_id: null
        }

        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(leave),
        })
        .then((r)=>r.json())
        .then((data)=>setUser(data))
    }

    

    return(
        <div>
           <h1>{user.organization.name}</h1>
           <button onClick ={()=>setShow(!show)}>View Shifts</button>
           <button onClick={()=>setEdit(!edit)}>Edit</button>
           <button onClick={leaveOrg}>Leave</button>
           {edit?
          <div>
          <form>
           <h1>Edit Organisation</h1>
           <label for="name">Name:</label>
           <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
           <label for="rate">Hourly Rate:</label>
           <input type="number" name="rate" value={rate} onChange={(e)=>setRate(e.target.value)}></input><br/>
           <button type="submit">Update</button><br/>
          </form>
          </div>
          :null}
           {show?<Shifts user={user}/>:null}
        </div>
    )
}

export default MyOrganization