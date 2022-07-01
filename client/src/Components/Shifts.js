import {useEffect, useState} from 'react'
import UserShift from './UserShift'
import '../App.css'

function Shifts({user}){

    const[shifts, setShifts] = useState([])
    const [show, setShow] = useState(false)

    const [date, setDate] = useState("")
    const[start, setStart] = useState("")
    const [finish, setFinish] = useState("")
    const [br, setBr] = useState("")

    useEffect(()=>{
    fetch(`organizations/${user.organization_id}/shifts`)
    .then((r)=>r.json())
    .then((data)=>setShifts(data))
    }, [])


    return(
        <div>
           <h1>Shifts</h1>
           <table>
           <tr>
                <td >Employee name</td>
                <td>Shift date</td>
                <td>Start time</td>
                <td>Finish time</td>
                <td>Break length(minutes)</td>
                <td>Hours worked</td>
                <td>Shift cost</td>
            </tr>
           
                {shifts.map((shift)=>(<UserShift key={shift.id} shift={shift} user={user}/>))}
           
           </table>
           <button onClick={()=>setShow(!show)}>Add Shift</button>
           {show?
            <form>
               <label for ="shift">Shift Date</label>
                <input type="date" name="shift"></input><br/>
                <label for="start">Start Time</label>
                <input type="time" name="start" ></input><br/>
                <label for="finish">Finish Time</label>
                <input type="time" name="finish" ></input><br/>
                <label for="break">Break in minutes</label>
                <input type="number" name="break" ></input><br/>
                <input type="submit" value="Submit"/> 
            </form>
             :null}
        </div>
    )
}

export default Shifts