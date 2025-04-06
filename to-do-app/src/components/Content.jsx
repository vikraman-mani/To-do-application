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

  let handleChecked = (id) => {
    let newListItems = items.map( (item)=> {
        return item.id === id ? {...item, required: !item.required} : item
    })

    setItems(newListItems)
  }

  return (
    <main>

    <div>
        <input type="text" placeholder='Add new item' value={newItem} 
        onChange={(event)=> { setNewItem(event.target.value) } } />
        <button>ADD </button>
    </div>
     <ul>
        {
            items.map( (item)=> {
                return (
                    <li key={item.id} className='item'>
                        <input type="checkbox" checked = {item.required} onChange={ () => { handleChecked(item.id) } } />
                        <label> {item.label}</label>
                        <FaEdit role='button' tabIndex={0}/>
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