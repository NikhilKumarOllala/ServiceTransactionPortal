import React, { Component } from 'react'
import './Listitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import jwt_decode from "jwt-decode";

const jwt = require('jsonwebtoken')

 

  
var profession;

function getUserrole(){
  profession=jwt_decode(document.cookie.split('=')[1]).role;


}


export class ListItemsProf extends Component {

  

  state={
      pid:'',
      Done:'',
    posts: [],
    custdetails

  };

  

  // update(id){
    
  //   var status_var="Ongoing";
    
    
  //   console.log("updated : "+status_var)
  
  //  axios.patch('http://localhost:8000/api/'+id, 
  //     { 
        
  //       status: status_var
  //     }
      
  //   );
  
    
  
  // }

  componentDidMount(){
   this.getBlogPost();
   
  };
  

  
 

  getBlogPost(){
    
    console.log("listitems "+profession);
    
    axios.get('http://localhost:8000/api1/'+profession)
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

  // done(id){

  //   this.setState(
  //     (prev)=>{
  //       return {
  //         ...prev,
  //         posts: prev.posts.map((item)=>{
  //           if(item._id!==id){
  //             return item;
  //           }
  //           else{
              
  //             return {
  //               ...item,
  //               status:"Ongoing"
                
  //             }
  //           }
  //         })

  //       }

  //     }

  //   )

  //   console.log("change: "+this.state.posts);
    
    
  // }


  render() {
    getUserrole();
    
    const items=this.state.posts;

    console.log("lisitmes");

     return this.state.posts.map((item,index)=>{

     

     return(
      <div className="list" key={index}>
      <br></br>
      <h3>City : {item.location}   Profession : {item.profession}</h3>
    <p>Description : {item.body}</p>
   
   


    </div>

     )
       
         
           
           
         
   
       })
    
    
    
 

  }
}

export default ListItemsProf

