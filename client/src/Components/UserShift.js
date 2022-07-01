import Moment from 'moment';
function UserShift({shift, user}){

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
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime() - breakMiliSEc;
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);

    if (hours < 0)
       hours = hours + 24;

    return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
}

    const difference = diff(sTime, fTime)

    const rate = user.organization.hourly_rate
    console.log(rate)
    console.log(difference)

    return(
        <tr>
          <td>{shift.user.name}</td>
          <td>{start}</td>
          <td>{time}</td>
          <td>{finish}</td>
          <td>{shift.break_length}</td>
          <td>{difference}</td>
        </tr>
    )
}

export default UserShift