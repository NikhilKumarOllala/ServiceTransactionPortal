import React from 'react'
import './Listitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

function change  (e,id)  {
  axios.patch('http://localhost:8000/api/'+id, { 
    
    status: e.target.value
  })
.then(res => this.setState({
status:e.target.value,
}));

}




function ListItems(props){
    const items=props.items;
   // console.log(items);
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
             <select name="status" id="status" className="dropdown" placeholder='status' value={item.status} onChange={(e)=>change(e,item._id)}>
                    
                    
                    <option value="Available">Available</option>
                    <option value="Done" >Done</option>
                    <option value="Ongoing">Ongoing</option>
                    
                </select>
  
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