import React, { useState } from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const Content = () => {

  let [items,setItems] = useState([
    {id: 1, label:"Html & Css", required: true},
    {id: 2, label:"JavaScript", required: true},
    {id: 3, label:"React", required: false},
  ])

  let [newItem, setNewItem] = useState("")

  return (
    <main>

    <div>
        <input type="text" placeholder='Add new item' value={newItem} 
        onChange={(event)=> {console.log(event)}} />
        <FaEdit role='button' tabIndex={0}/>
    </div>
     <ul>
        {
            items.map( (item)=> {
                return (
                    <li key={item.id} className='item'>
                        <input type="checkbox" checked = {item.required} onChange={ ()=>{} } />
                        <label> {item.label}</label>
                        <RiDeleteBin6Fill role='button' tabIndex={0} />
                    </li>
                )
            })
        }
     </ul>

    </main>
   )
}

export default Content