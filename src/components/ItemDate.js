import './ItemDate.css';

function ItemDate(props){
         
    const day1 = props.day;
    const month2 =props.month;
    const year3= props.year;




    return(
         <div className='date'>
               <span>{day1}</span>
               <div>{month2}</div>
               <div>{year3}</div>

         </div>
    )
}

export default ItemDate;