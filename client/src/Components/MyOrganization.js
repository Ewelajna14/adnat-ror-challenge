function MyOrganization({user, setUser}){

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
           <button>View Shifts</button>
           <button>Edit</button>
           <button onClick={leaveOrg}>Leave</button>
        </div>
    )
}

export default MyOrganization