import React, { useState } from 'react'

const Content = () => {

  let [items,setItems] = useState([
    {id: 1, lable:"Html & Css", required: true},
    {id: 2, lable:"JavaScript", required: true},
    {id: 3, lable:"React", required: false},
  ])

  return (
    <main>
     <ul>
        {
            items.map( (item)=> {
                return (
                    <li key={item.id}>
                        <input type="checkbox" checked = {item.required} />
                        <lable> {item.lable}</lable>
                    </li>
                )
            })
        }
     </ul>
    </main>
   )
}

export default Content