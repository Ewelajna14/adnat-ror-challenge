import {useEffect, useState} from 'react'
import UserShift from './UserShift'
import '../App.css'

function Shifts({user}){

    const[shifts, setShifts] = useState([])

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
        </div>
    )
}

export default Shifts