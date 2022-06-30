import Shifts from "./Shifts"
import {useState} from 'react'

function MyOrganization({user, setUser}){

    const [show, setShow] = useState(false)

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
           <button>Edit</button>
           <button onClick={leaveOrg}>Leave</button>
           {show?<Shifts/>:null}
        </div>
    )
}

export default MyOrganization