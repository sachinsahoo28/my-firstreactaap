import './App.css';
import Item from './components/Items';
import ItemDate from './components/ItemDate';


function App() {
   const response = [
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"may",
      itemYear:"1998"
    },
    {
      itemName:"Nirma1",
      itemDate:"201",
      itemMonth:"may1",
      itemYear:"19981"
    },
    {
      itemName:"Nirma2",
      itemDate:"202",
      itemMonth:"may2",
      itemYear:"19982"
    },
    {
      itemName:"Nirma3",
      itemDate:"203",
      itemMonth:"may3",
      itemYear:"19983"
    }
  ]
   
  return (
 <div>
    <div>

    <Item name={response[0].itemName}></Item>
    <ItemDate day={response[0].itemDate} month= { response[1].itemMonth} year= {response[2].itemYear} ></ItemDate>

    <Item name={response[1].itemName}></Item>
    <ItemDate day={response[1].itemDate} month= { response[1].itemMonth} year= {response[2].itemYear} ></ItemDate>

    <Item name={response[2].itemName}></Item>
    <ItemDate day={response[3].itemDate} month= { response[1].itemMonth} year= {response[2].itemYear} ></ItemDate>
     <p>hi guys kaise hain aap sabh log....?</p>
            
            
    </div>
            
 </div>
  );
}

export default App;
