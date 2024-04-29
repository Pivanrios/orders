import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";//import db from our configuration

function Orders() {
  //set our state to an empty array
  const [orders, setOrders] = useState([]);
  //get the collection from the database
  const ordersCollections = collection(db, "orders")
  //When we refresh the page
  useEffect(()=>{
    //set our data
    const setData = async()=>{//create async funtion to wait for our promes
      console.log("Setting data...")
      const data = await getDocs(ordersCollections);//retrieves documents from the collection "orders"
      setOrders(data.docs.map((doc)=> ({...doc.data(), id:doc.id})))//crazy shit
      console.log("orders found...", orders);
    };
    setData();//invoke the function
  },[]);//empty library so will run once

  return (
    <>
        <h2 className="text-5xl font-bold">Orders</h2>
        <div className="container flex-col ">
          <div className="columns-8 flex-auto font-bold bg-slate-500">
            <p>Order</p>
            <p>Date</p>
            <p>Name</p>
            <p>Platillos</p>
            <p>Breakroom</p>
            <p>Total</p>
            <p>Status</p>
          </div>
          {orders.map((order)=>(
            <div className="columns-8 flex-auto bg-slate-200 border border-gray-950" 
                  key={order.orderId}>{//container row & add key to child
             }<p>{order.orderId}</p>
              <p>{order.date}</p>
              <p>{order.customerName}</p>
              <p>{order.platillos}</p>
              <p>{order.breakroom}</p>
              <p>{order.total}</p>
              <p>{order.status}</p>
            </div>
          ))}
        </div>
    </>

  )
}

export default Orders;