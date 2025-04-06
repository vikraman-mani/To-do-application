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

  let [isEdit, setIsEdit] = useState(false)

  let [currentId, setCurrentId] = useState(null)

  let handleChecked = (id) => {
    let newListItems = items.map( (item)=> {
        return item.id === id ? {...item, required: !item.required} : item
    })

    setItems(newListItems)
  }

  let handleUpdate = (id) => {
     setIsEdit(true)

     setCurrentId(id)   // Kept Update ID

     let listIem = items.find( item => item.id === id)
     setNewItem(listIem.label)
  }

  let handleDelete = (id) => {
    let newListItems = items.filter( (item)=> 
        item.id !== id ).map( (item,index) => {
            return {...item, id: index + 1 }
        } )
    setItems(newListItems)
  }

  let handleAddOrSave = () => {
    if(isEdit) {
      let newListItems = items.map( (item)=> {
        return item.id == currentId ? {...item, label: newItem} : item
      })
      setItems(newListItems)

      setCurrentId(null)
      setNewItem("")
      setIsEdit(false)
    }
    else {
      setItems( [...items, {id: items.length + 1, label: newItem, required: false} ] )
      setNewItem("")
    }
  }

  return (
    <main>

    <div>
        <input type="text" placeholder='Add new item' value={newItem} 
        onChange={(event)=> { setNewItem(event.target.value) } } />
        <button onClick={ handleAddOrSave }> {isEdit ? "Save" : "ADD"} </button>
    </div>
     <ul>
        {
            items.map( (item)=> {
                return (
                    <li key={item.id} className='item'>
                        <input type="checkbox" checked = {item.required} onChange={ () => { handleChecked(item.id) } } />
                        <label> {item.label}</label>
                        <FaEdit role='button' tabIndex={0} onClick={ ()=> {handleUpdate(item.id)} }/>
                        <RiDeleteBin6Fill role='button' tabIndex={0} onClick={ ()=> {handleDelete(item.id)}} />
                    </li>
                )
            })
        }
     </ul>

    </main>
   )
}

export default Content