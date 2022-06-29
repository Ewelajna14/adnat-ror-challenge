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
        organization.id !== deletedItem
    })
    setOrganizations(notDeletedOrg)
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
            <p>
                {organizations.map(organization=>(
                        <Organizations key={organization.id} organization={organization} onUpdateOrganization={onUpdateOrganization} onDeleteOrganization={onDeleteOrganization}/>
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