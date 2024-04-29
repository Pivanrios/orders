import { useState } from "react"
import { collection,addDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";


function Form() {
  //create states to save the values from the input
  const [newDate, setDate] = useState("");
  const [newName, setName] = useState("");
  const [newDish, setDish] = useState("");
  const [newBreakroom, setBreakroom] = useState("")
  const [newTotal, setTotal] = useState(0);

  //get inputs and store them on a variable
  const dateInput = document.getElementById("dateInput");
  const nameInput = document.getElementById("nameInput");
  const dishInput = document.getElementById("dishInput");
  const breakroomInput = document.getElementById("breakroomInput");
  const totalInput = document.getElementById("totalInput");

  //get the collection from our database
  const ordersCollection = collection(db, "orders");

  //Function that runs when submit button is clicked
  const addOrder = async (e)=>{
    e.preventDefault();//prevenrts refresh and allows to start fucntion
    console.log("start to add order");
    //add validation
    if((newDate.length > 0) && (newName.length > 0) && (newDish.length > 0) && (newBreakroom.length > 0)){ //conditions to add doc to database...
      await addDoc(ordersCollection, {date:newDate, customerName:newName, platillos:newDish, breakroom:newBreakroom, total:newTotal});//add new document 
    }
  };
  //clear form, cleans the inputs from our form
  const clearForm = (e)=>{//clear form function
    e.preventDefault();
    console.log("Clear forms input");
    dateInput.value = "";
    nameInput.value = "";
    dishInput.value = "";
    breakroomInput.value = "";
    totalInput.value = "";


  }

  
  return (
    <>
    <h2 className="text-3xl font-bold">Take Order</h2>
    <form action="" className="container flex flex-col bg-slate-300 gap-1 ">
        <label htmlFor="">Order Number #</label>
        <label htmlFor="">Date: <input type="date" id="dateInput" required onChange={(event)=>{setDate(event.target.value)}}/></label>
        <label htmlFor="">Name: <input type="text" id="nameInput" required onChange={(event)=>{setName(event.target.value)}}/></label>
        <label htmlFor="">Platillo: <input id="dishInput" type="text" required onChange={(event)=>{setDish(event.target.value)}}/></label>
        <label htmlFor="">Breakroom: <input type="text" id="breakroomInput" required onChange={(event)=>{setBreakroom(event.target.value)}}/></label>
        <label htmlFor="">Total:<input type="number" id="totalInput" required onChange={(event)=>{setTotal(event.target.value)}}/></label>
        <button className="bg-slate-400" onClick={(e)=>{addOrder(e)}}>Submit</button>
        <button className="bg-slate-400" onClick={(e)=>{clearForm(e)}}>Clear</button>
    </form>
    </>
  )
}

export default Form