import React from 'react'
import '/ServiceTransactionPortal/service-portal/src/components/stylesheets/Listitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItems(props){
    const items=props.items;
    const listItems= items.map(item=>
    {
        return <div className="list" key ={item.key}>
             <p>
                 {item.text}
                 </p>
             <div>

                 <span className="delete">
                 <FontAwesomeIcon className="Faicons"
                  icon='trash'
                  onClick={()=> props.deleteItem(item.key)}
                  />


             </span>

             <span className="done">
                 <button onClick={()=> props.deleteItem(item.key)}>Done</button>
             
             </span>
             
             
                 
             
             </div>
             


        </div>
      
    })

    return (
        <div>{listItems}</div>

    )
   




}
export default ListItems;