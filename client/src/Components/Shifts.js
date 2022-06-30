import UserShift from './UserShift'

function Shifts(){
    return(
        <div>
           <h1>Shifts</h1>
           <table>
           <tr>
                <td>Employee name</td>
                <td>Shift date</td>
                <td>Start time</td>
                <td>Finish time</td>
                <td>Break length(minutes)</td>
                <td>Hours worked</td>
                <td>Shift cost</td>
            </tr>
            <tr>
                <UserShift/>
            </tr>
           </table>
        </div>
    )
}

export default Shifts