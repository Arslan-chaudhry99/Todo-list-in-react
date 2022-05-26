import { getAllByPlaceholderText } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import "./todo.css"
export const Todolist = () => {
  let getloclDta=()=>{
    const lists= localStorage.getItem("todo")
    if(lists){
      return JSON.parse(lists)
    }
    else{
      return [];
    }
  }
  const [inputdata, setInputdata] =useState("");
  const [Items, setItemsData ]= useState(getloclDta())
  const [editItems, seteditItems]= useState('')
  const[togleButton, settogleButton]=useState(false)
  const[lastUpdate, setlastUpdate]=useState('')
 
  const addTo=()=>{
  if(!inputdata){
  alert('please add items')
   }
  else if(inputdata && togleButton){
    setItemsData(
Items.map((curntEl)=>{
if(curntEl.id === editItems){
  return {...curntEl, name:inputdata}
  

}
return curntEl

})

    );
    setInputdata("");
    seteditItems(null);
    settogleButton(false);
  }
   else{
    const upDatedlist={
      id:new Date().getTime().toString(),
      name:inputdata
    }
    
    setItemsData([...Items, upDatedlist])
    setInputdata("")
    
   }
  }
 const deletItem =(index)=>{
const updatedItems=Items.filter((element)=>{
return element.id !== index
})
setItemsData(updatedItems);
 }

let remAll=()=>{
  setItemsData([]);
}
//Edit Items
let editItem=(index)=>{
  const item_upto_date=Items.find((curElement)=>{
    return curElement.id ===index
  })
  setInputdata(item_upto_date.name);
  seteditItems(index);
  settogleButton(true);
}
useEffect(()=>{
  localStorage.setItem ("todo", JSON.stringify(Items))
 
},[Items]);

// checkList
let length=Items.length
// last update
const lastUp=()=>{
  const dateAndTime = new Date();
let txt = dateAndTime.toLocaleString();
setlastUpdate(txt);
}
setInterval(lastUp, 1000);
  return (
    <>

<div className="main-div">
        <div className="child-div">
        <h1 className='length-1 '>Curent Time  {lastUpdate}</h1>
      <button className='btn task'> You Add {length} Task </button>
         
          <figure>
            
            <figcaption>Let's write</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder=" Add Item"
              className="form-control "
             value={inputdata}
             onChange={(element)=>setInputdata(element.target.value)}
             
            />
         {   togleButton ? <i className=" far fa-solid fa-edit add-btn" onClick={addTo}></i> :<i className=" fa fa-solid fa-plus add-btn task-1" onClick={addTo}></i>
         }
          </div>
          
         
          {
            Items.map((e, index)=>{
            return (
              <div className="showItems" key={e.id}>
              <div className='eachItem'>
                <div className='cont'>
               
                <h3  >{e.name}</h3>
                </div>
                <div className='todo-btn'>
                 
                <i className=" far fa-solid fa-edit add-btn" onClick={()=>{editItem(e.id)}} ></i>
                {
                 togleButton ? "":   <i className=" far fa-solid fa-trash-alt add-btn" onClick={()=>{deletItem(e.id)}} ></i> 
                }
              
                
                </div>
              </div>
            </div>
            )
            })
          }  
         
               
         
          

          {/* rmeove all button  */}
          <div className="showItems">
            <button
              className="btn task "
              
              onClick={remAll}
              >
              <span ><i className=" far fa-solid fa-trash-alt " ></i></span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
