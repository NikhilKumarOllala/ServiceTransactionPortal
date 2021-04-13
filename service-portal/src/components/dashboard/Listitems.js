import React from 'react'
import './Listitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItems(props){
    const items=props.items;
    return items.map((item,index)=>{
      
        return(
          <div className="list" key={index}>
            <br></br>
            <h3>City : {item.location}   Profession : {item.profession}</h3>
          <p>Description : {item.body}</p>
          <span>
                  <FontAwesomeIcon className="Faicons"
                  icon='trash'
                //    onClick={()=> props.deleteItem(item.key)}
                  />
             </span>
             <button id="status">Status Button</button>
  
          </div>
          
        )
  
      })
    // const listItems= items.map(item=>
    // {
    //     return <div className="list" key ={item.key}>
    //          <p>
    //              {item.body}
                
    //              <span>
    //              <FontAwesomeIcon className="Faicons"
    //               icon='trash'
    //                onClick={()=> props.deleteItem(item.key)}
    //               />
    //          </span>
    //          </p>
             


    //     </div>
      
    // })





}
export default ListItems;