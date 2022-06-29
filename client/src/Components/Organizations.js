import {useState} from 'react'

function Organizations({organization, onUpdateOrganization, onDeleteOrganization}){

    const [show, setShow] = useState(false)
    const [orgId, setOrgId] = useState(null)
    const [name, setName] = useState(organization.name)
    const [rate, setRate] = useState(organization.hourly_rate)

    const handleEdit =(e)=>{
        setShow(!show)
        setOrgId(e.target.id)
    }

    const handleSubmit = (e) =>{
     e.preventDefault()
     const updatedOrganization = {
     name: name,
     hourly_rate: rate
     }
     
     fetch(`/organizations/${orgId}`, {
        method: "PATCH",
        headers:{
        "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedOrganization),
     })
     .then((r)=>r.json())
     .then((data)=>onUpdateOrganization(data))
     setShow(false)
    }

    const handleDelete = ()=>{
        fetch(`/organizations/${orgId}`, {
            method: "DELETE"
        })
        onDeleteOrganization(orgId)
    }

   

    return(
        <ul>
          <li>{organization.name}
          <button id={organization.id} onClick={handleEdit}>Edit</button>
          {show?
          <div>
          <form onSubmit = {handleSubmit}>
           <h1>Edit Organisation</h1>
           <label for="name">Name:</label>
           <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
           <label for="rate">Hourly Rate:</label>
           <input type="number" name="rate" value={rate} onChange={(e)=>setRate(e.target.value)}></input><br/>
           <button type="submit">Update</button><br/>
          </form>
          <button onClick={handleDelete}>Delete</button>
          </div>
          :null}
          <button>Join</button>
          </li>
        </ul>
    )
}

export default Organizations