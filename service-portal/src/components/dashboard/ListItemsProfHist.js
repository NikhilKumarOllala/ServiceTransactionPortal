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


export class ListItemsCusHistory extends Component {

  

  state={
    posts: []

  };



  componentDidMount(){
   this.getBlogPost();
   
  };
  

  getBlogPost(){
    
    console.log("listitems "+c_id);
    
    axios.get('http://localhost:4000/api4/'+c_id)
    .then((response)=>{
      const data= response.data;
      this.setState({posts:data});

      console.log("data from mongo recieved to prof history list item")
      console.log(data);


    })
    .catch((error)=>{
      console.log("data from mongo didnrt receive");

    })
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
   <br></br>
   <p><b>Job Completed</b></p>
       
       
      
    </div>

     )
       

   
       })
    
    
    
 

  }
}

export default ListItemsCusHistory;