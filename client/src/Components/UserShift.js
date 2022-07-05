import Moment from 'moment';
function UserShift({shift, user, onDelete}){

    const startDate = Moment.parseZone(shift.start).format('MMMM DD,  LT')
    const endDate = Moment.parseZone(shift.finish).format('MMMM DD,  LT')
   

   const time = startDate.split(',')[1]
   const start = startDate.split(',')[0]
   const finish = endDate.split(',')[1]

   const st = Moment.parseZone(shift.start).format('MMMM DD, HH:mm')
   const sTime = st.split(",")[1]
   const ft = Moment.parseZone(shift.finish).format('MMMM DD, HH:mm')
   const fTime = ft.split(",")[1]
  

   let breakMiliSEc = shift.break_length *1000 *60

   const diff = (start, end)=> {
    start = start.split(":");
    end = end.split(":");
    let startDate = new Date(0, 0, 0, start[0], start[1], 0);
    let endDate = new Date(0, 0, 0, end[0], end[1], 0);
    let diff = endDate.getTime() - startDate.getTime() - breakMiliSEc;
    let hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    let minutes = Math.floor(diff / 1000 / 60);

    if (hours < 0)
       hours = hours + 24;

    return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
}

    const rate = user.organization.hourly_rate
   
    const calculateCost = (start, end)=> {
        start = start.split(":");
        end = end.split(":");
        let startDate = new Date(0, 0, 0, start[0], start[1], 0);
        let endDate = new Date(0, 0, 0, end[0], end[1], 0);
        let diff = endDate.getTime() - startDate.getTime() - breakMiliSEc;
        let hours = Math.floor(diff / 1000 / 60 );
        let minRate = rate / 60
        let cost = hours * minRate
        return Math.round(cost * 100) / 100
    } 

     const cost = calculateCost(sTime, fTime)


    const difference = diff(sTime, fTime)

    const handleDelete = (e) => {
     const shiftId = e.target.id
     fetch(`/shifts/${shiftId}`, {
        method: "DELETE"
     })
     .then(res=>{
        if (res.ok){
            onDelete(shiftId)
        }
    })
    }

    return(
        <tr>
          <td>{shift.user.name}</td>
          <td>{start}</td>
          <td>{time}</td>
          <td>{finish}</td>
          <td>{shift.break_length}</td>
          <td>{difference}</td>
          <td>{cost}</td>
          {user.id == shift.user_id?
          <button id = {shift.id} onClick ={handleDelete}>Delete</button>
           :null}
        </tr>
    )
}

export default UserShift