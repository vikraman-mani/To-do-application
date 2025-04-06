import React, { useState } from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const Content = () => {

  let [items,setItems] = useState([
    {id: 1, lable:"Html & Css", required: true},
    {id: 2, lable:"JavaScript", required: true},
    {id: 3, lable:"React", required: false},
  ])

  return (
    <main>

    <div>
        <input type="text" placeholder='Add new item' />
        <FaEdit role='button' tabIndex={0}/>
    </div>
     <ul>
        {
            items.map( (item)=> {
                return (
                    <li key={item.id} className='item'>
                        <input type="checkbox" checked = {item.required} />
                        <lable> {item.lable}</lable>
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