import React, { useState } from 'react'
import "./todo.css"
export const Todolist = () => {
  const [inputdata, setInputdata] =useState("");
  const [Items, setItemsData ]= useState([])

  const addTo=()=>{
  if(!inputdata){
  alert('please add items')
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
  console.log('working')
}
  return (
    <>

<div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add Your List Here </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder=" Add Item"
              className="form-control"
             value={inputdata}
             onChange={(element)=>setInputdata(element.target.value)}
             
            />
            
           <i className=" fa fa-solid fa-plus add-btn" onClick={addTo}></i>
          </div>
          
         
          {
            Items.map((e, index)=>{
            return (
              <div className="showItems" key={e.id}>
              <div className='eachItem'>
                <h3>{e.name}</h3>
                <div className='todo-btn'>
                <i className=" far fa-solid fa-edit add-btn" ></i>
                <i className=" far fa-solid fa-trash-alt add-btn" onClick={()=>{deletItem(e.id)}} ></i>
                </div>
              </div>
            </div>
            )
            })
          }  
         
               
         
          

          {/* rmeove all button  */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              >
              <span onClick={remAll}> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
