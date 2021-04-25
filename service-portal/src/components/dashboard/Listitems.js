import React, { Component } from 'react'
import './Listitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


const jwt = require('jsonwebtoken')

 

  
var c_id;

function getUserID(){
  var token = document.cookie.split('=')[1];
  jwt.verify(token,"thisisakeyforthejwtandisaccessedatthebackendonly",(err,decodedToken) => {
    if (err) {
        console.log(err);
    } else{
      c_id = decodedToken.id;
     
    }
  })
}


export class Listitems extends Component {

  

  state={
    posts: []

  };

  

  update(id){
    
    var status_var=this.state.posts.filter((item )=>{
      return item._id===id
    })[0].status
    
    
    console.log("updated : "+status_var)
  
   axios.patch('http://localhost:8000/api/'+id, 
      { 
        
        status: status_var
      }
      
    );
  
    
  
  }

  componentDidMount(){
   this.getBlogPost();
   
  };
  

  
 

  getBlogPost(){
    
    console.log("listitems "+c_id);
    
    axios.get('http://localhost:8000/api/'+c_id)
    .then((response)=>{
      const data= response.data;
      this.setState({posts:data});

      console.log("data from mongo recieved to listitem")
      console.log(data);


    })
    .catch((error)=>{
      console.log("data from mongo didnrt receive");

    })
  }

  change(e,id){

    this.setState(
      (prev)=>{
        return {
          ...prev,
          posts: prev.posts.map((item)=>{
            if(item._id!==id){
              return item;
            }
            else{
              
              return {
                ...item,
                status:e.target.value
                
              }
            }
          })

        }

      }

    )

    console.log("change: "+this.state.posts);
  }

 


  render() {
    getUserID();
    
    const items=this.state.posts;

    console.log("lisitmes");
    
    
    

    

     return this.state.posts.map((item,index)=>{

     

     return(
      <div className="list" key={index}>
      <br></br>
      <h3>City : {item.location}   Profession : {item.profession}</h3>
    <p>Description : {item.body}</p>
    
       
       
       <select name="statusname" id="status" className="dropdown"   value={ this.state.posts.filter((post )=>{
      return post._id===item._id
    })[0].status}  onChange={(e)=>{this.change(e,item._id)}}>
              
      
              <option value="Available">Available</option>
              <option value="Done" >Done</option>
              <option value="Ongoing">Ongoing</option>
              
          </select>

          <button id="update"  onClick={this.update(item._id)}>Update</button>

    </div>

     )
       
         
           
           
         
   
       })
    
    
    
 

  }
}

export default Listitems

//  else if(props.tag==="history" || props.tag==="profhistory"){
 
//    return items.map((item,index)=>{
       
//      return(
//        <div className="list" key={index}>
//          <br></br>
//          <h3>City : {item.location}   Profession : {item.profession}</h3>
//        <p>Description : {item.body}</p>
//        <br></br>
//        <p><b>Job Completed</b></p>
 
//        </div>
       
//      )
 
//    })
//  }
 



// function ListItems(props){
//     const items=props.items;
//    // console.log(items);

//    if(props.tag==="Home" || props.tag==="profhome"){
//     return items.map((item,index)=>{
      
//         return(
//           <div className="list" key={index}>
//             <br></br>
//             <h3>City : {item.location}   Profession : {item.profession}</h3>
//           <p>Description : {item.body}</p>
//           <span>
//                   <FontAwesomeIcon className="Faicons"
//                   icon='trash'
//                 //    onClick={()=> props.deleteItem(item.key)}
//                   />
//              </span>
             
             
//              <select name="statusname" id="status" className="dropdown"   >
                    
                    
//                     <option value="Available">Available</option>
//                     <option value="Done" >Done</option>
//                     <option value="Ongoing">Ongoing</option>
                    
//                 </select>

//                 <button id="update"  onClick={update(item._id,document.getElementById("status").value)}>Update</button>
  
//           </div>
          
//         )
  
//       })
   
// }
// else if(props.tag==="history" || props.tag==="profhistory"){

//   return items.map((item,index)=>{
      
//     return(
//       <div className="list" key={index}>
//         <br></br>
//         <h3>City : {item.location}   Profession : {item.profession}</h3>
//       <p>Description : {item.body}</p>
//       <br></br>
//       <p><b>Job Completed</b></p>

//       </div>
      
//     )

//   })
// }





// }

 


// export default ListItems;