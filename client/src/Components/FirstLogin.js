
import {useEffect, useState} from 'react'
import Organizations from './Organizations'
import {useHistory} from 'react-router-dom'


function FirstLogin({user, setUser}){

    let history = useHistory()

    const [organizations, setOrganizations] = useState([])
    const [name, setName] = useState("")
    const [rate, setRate] = useState("")
    
    useEffect(()=>{
     fetch("/organizations")
     .then((response)=>response.json())
     .then((data)=>setOrganizations(data))
    }, [])


    const onUpdateOrganization = (updatedOrg)=>{
    const updatedOrgArray = organizations.map((organization)=>{
        if(organization.id === updatedOrg.id){
            return updatedOrg
        }
        else {return organization}
    })
    setOrganizations(updatedOrgArray)
    }

    const onDeleteOrganization = (deletedItem)=>{
    const notDeletedOrg = organizations.filter((organization) =>{
    return organization.id != deletedItem})
    setOrganizations(notDeletedOrg)
    }


    const onCreateOrg = (newOrganization)=>{
     const newOrganizations = [...organizations, newOrganization]
     setOrganizations(newOrganizations)
    }


    const handleCreateOrg = (e)=>{
    e.preventDefault()
    const newOrganization = {
       name: name,
       hourly_rate: rate
    }
    fetch(`/users/${user.id}/organizations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrganization),
    })
    .then((r)=> r.json())
    .then((newOrganization)=>onCreateOrg(newOrganization))
    setName("")
    setRate("")
    window.location.reload(false);
    }

    return(
        <div>
            <p>You arent't a member of any organisations.<br/>
            Join an existing one or create a new one.
            </p>
            <h2>Organizations</h2>
            <p>
                {organizations.map(organization=>(
                        <Organizations key={organization.id} organization={organization} onUpdateOrganization={onUpdateOrganization} onDeleteOrganization={onDeleteOrganization} user={user} setUser={setUser}/>
                ))}
            </p>
            <h2>Create organisation</h2>
            <form onSubmit={handleCreateOrg}>
                <label for ="name">Name</label>
                <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
                <label for="rate">Hourly rate: $</label>
                <input type="number" name="rate" value={rate} onChange={(e)=>setRate(e.target.value)}></input><br/>
                <input type="submit" value="Create and Join"/>
            </form>

        </div>
    )
}

export default FirstLogin