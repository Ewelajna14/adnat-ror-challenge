import {useState} from 'react'

function Organizations({organization}){

    const [show, setShow] = useState(false)

    const handleEdit =()=>{
        setShow(!show)
    }

    return(
        <ul>
          <li>{organization.name}
          <button onClick={handleEdit}>Edit</button>
          {show?
          <form>
           <h1>Edit Organisation</h1>
           <label for="name">Name:</label>
           <input type="text" name="name"></input><br/>
           <label for="rate">Hourly Rate:</label>
           <input type="number" name="rate"></input><br/>
           <button>Update</button><br/>
           <button>Delete</button>
          </form>
          :null}
          <button>Join</button>
          </li>
        </ul>
    )
}

export default Organizations