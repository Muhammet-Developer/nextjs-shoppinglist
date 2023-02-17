"use client";
import { ShoppingData } from '@/Type/Types';
import { useState } from 'react'
// import Main2 from "../mani2/index"
import "bootstrap/dist/css/bootstrap.min.css"
import Basket from '../basket/page';
const Main:React.FC = () => {
  const [name,setName] = useState<string>("");
  const [quantity,setQuantity] = useState<string>("");
  const [section,setSection] = useState<string>("fruits-vegetables");
  const [data,setData] = useState<ShoppingData[]>([]);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    if(name && quantity){
      setData([...data,{name:name,quantity:quantity,section:section,id:data.length+1}])
    }
    setName("");
    setQuantity("");
    setSection("");
    
  }
  const deleteMessage = (id:number) =>{
    setData(data.filter(td=>td.id != id))
  }
  console.log("first")
  return (
    <div >
    <div className="interactions">
      <label>Add new products</label>
      <form onSubmit={handleSubmit}>
        <div className="interactions__section">
          <label>Section</label>
          <select id="section" value={section}  onChange={(e) => setSection(e.target.value)}>
              <option>Fruits & Vegetables</option>
              <option value="meat-seafood">Meat & Seafood</option>
              <option value="dairy">Dairy</option>
              <option value="forzen-foods">Frozen Foods</option>
              <option value="bread-pasta">Breads & Pasta</option>
              <option value="snacks">Snacks</option>
              <option value="breverages">Beverages</option>
              <option value="cleaning">Cleaning</option>
              <option value="others">Others</option>
              </select>

        </div>
        <div className="interactions__quantity">
          <label>Quantity</label>
          <input type="number" name="quantity"  value={quantity} onChange={e => setQuantity(e.target.value)} />
        </div>
        <div className="interactions__name">
          <label>Name</label>
          <input type="text" name="name"  value={name} onChange={e => setName(e.target.value)} />
        </div>
        <button className="interactions__button">Add to list</button>
      </form>
    </div>
  <Basket data={data} deleteMessage={deleteMessage}/>
  </div>
  )
}

export default Main