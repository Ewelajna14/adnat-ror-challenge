import {useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Organizations from './Organizations'

function FirstLogin({user, setUser}){

    const [organizations, setOrganizations] = useState([])
    

    let history = useHistory()

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