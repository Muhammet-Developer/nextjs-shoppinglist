import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { ShoppingData } from '@/Type/Types'
interface Iprops {
  data:ShoppingData[]
  deleteMessage:(id:number)=>void
}
const Basket:React.FC <Iprops> = ({data,deleteMessage}) => {
  console.log("data",data)

  return (
    <div className="sections" > 
         {data.map((item,iid)=>(
          <>
           {item.section === "fruits-vegetables" ? <div key={iid} className="section fruits-vegetables">
             <h3>FRUITS / VEGETABLES</h3>
             <ul id="fruits-vegetables-list" >
               <li>Name <span>Quantity</span><span>Deleted</span></li>
               <hr />
               <li>{item.name} <span>{item.quantity}</span><span onClick={()=>deleteMessage(item.id)}  style={{cursor:"pointer"}}>X</span></li>
             </ul>
           </div> :"" }
           {item.section === "meat-seafood" ? <div className="section meat-seafood">
             <h3>MEAT / SEAFOOD</h3>
             <ul id="meat-seafood-list" >
             <li>Name <span>Quantity</span><span>Deleted</span></li>
               <hr />
               <li>{item.name} <span>{item.quantity}</span><span onClick={()=>deleteMessage(item.id)}  style={{cursor:"pointer"}}>X</span></li>
             </ul>
           </div> : ""}
           {item.section === "dairy" ? <div className="section dairy">
             <h3>Dairy</h3>
             <ul id="dairy-list" >
             <li>Name <span>Quantity</span><span>Deleted</span></li>
               <hr />
               <li>{item.name} <span>{item.quantity}</span><span onClick={()=>deleteMessage(item.id)}   style={{cursor:"pointer"}}>X</span></li>
             </ul>
           </div> : ""}
           {item.section === "forzen-foods" ? <div className="section forzen-foods">
             <h3>Frozen Foods</h3>
             <ul id="forzen-foods-list" >
             <li>Name <span>Quantity</span><span>Deleted</span></li>
               <hr />
               <li>{item.name} <span>{item.quantity}</span><span onClick={()=>deleteMessage(item.id)}   style={{cursor:"pointer"}}>X</span></li>
             </ul>
           </div> : ""}
           {item.section === "bread-pasta" ? <div className="section bread-pasta">
             <h3>Breads & Pasta</h3>
             <ul id="bread-pasta-list" >
             <li>Name <span>Quantity</span><span>Deleted</span></li>
               <hr />
               <li>{item.name} <span>{item.quantity}</span><span onClick={()=>deleteMessage(item.id)}   style={{cursor:"pointer"}}>X</span></li>
             </ul>
           </div> : ""}
           {item.section === "snacks" ? <div className="section snacks">
             <h3>Snacks</h3>
             <ul id="snacks-list" >
             <li>Name <span>Quantity</span><span>Deleted</span></li>
               <hr />
               <li>{item.name} <span>{item.quantity}</span><span onClick={()=>deleteMessage(item.id)}   style={{cursor:"pointer"}}>X</span></li>
             </ul>
           </div> : ""}
           {item.section === "breverages" ? <div className="section breverages">
             <h3>Breverages</h3>
             <ul id="breverages-list" >
             <li>Name <span>Quantity</span><span>Deleted</span></li>
               <hr />
               <li>{item.name} <span>{item.quantity}</span><span onClick={()=>deleteMessage(item.id)}   style={{cursor:"pointer"}}>X</span></li>
             </ul>
           </div> : ""}
           {item.section === "cleaning" ? <div className="section cleaning">
             <h3>Cleaning</h3>
             <ul id="cleaning-list" >
             <li>Name <span>Quantity</span><span>Deleted</span></li>
               <hr />
               <li>{item.name} <span>{item.quantity}</span><span onClick={()=>deleteMessage(item.id)}   style={{cursor:"pointer"}}>X</span></li>
             </ul>
           </div> : ""}
           {item.section === "others" ? <div className="section others">
             <h3>Others</h3>
             <ul id="others-list" >
             <li>Name <span>Quantity</span><span>Deleted</span></li>
               <hr />
               <li>{item.name} <span>{item.quantity}</span><span onClick={()=>deleteMessage(item.id)}   style={{cursor:"pointer"}}>X</span></li>
             </ul>
           </div> : ""}
           </>
           ))}
          </div>
  
  )
}

export default Basket
