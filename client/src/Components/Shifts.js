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


    const onAdd = (data) =>{
        const newData = [...shifts, data]
        setShifts(newData)
    }

    const onDelete = (shiftId)=>{
     const newData = shifts.filter((shift)=>{
        return shift.id != shiftId
     })
     setShifts(newData)
    }


    const onAddShift = (e)=>{
    e.preventDefault()
    const data = {
        start: date + 'T' + start,
        finish: date + 'T' + finish,
        break_length: br
    }

    fetch('/shifts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((r)=> r.json())
    .then((data)=>onAdd(data))
    setDate("")
    setStart("")
    setFinish("")
    setBr("") 

    }


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
           
                {shifts.map((shift)=>(<UserShift key={shift.id} shift={shift} user={user} onDelete={onDelete}/>))}
           
           </table>
           <button onClick={()=>setShow(!show)}>Add Shift</button>
           {show?
            <form onSubmit={onAddShift}>
               <label for ="shift">Shift Date</label>
                <input type="date" name="shift" value={date} onChange={(e)=>setDate(e.target.value)}></input><br/>
                <label for="start">Start Time</label>
                <input type="time" name="start" value={start} onChange={(e)=>setStart(e.target.value)} ></input><br/>
                <label for="finish">Finish Time</label>
                <input type="time" name="finish" value={finish} onChange={(e)=>setFinish(e.target.value)}></input><br/>
                <label for="break">Break in minutes</label>
                <input type="number" name="break" value={br} onChange={(e)=>setBr(e.target.value)}></input><br/>
                <input type="submit" value="Submit"/> 
            </form>
             :null}
        </div>
    )
}

export default Shifts