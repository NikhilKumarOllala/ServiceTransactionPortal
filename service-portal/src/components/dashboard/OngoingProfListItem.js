import React, { Component } from 'react'
import './Listitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
const Swal=require('sweetalert2');


const jwt = require('jsonwebtoken')

 

  
var profid;

function getUserID(){
  var token = document.cookie.split('=')[1];
  jwt.verify(token,"thisisakeyforthejwtandisaccessedatthebackendonly",(err,decodedToken) => {
    if (err) {
        console.log(err);
    } else{
      profid= decodedToken.id;
     
    }
  })
}


export class OngoingProfListitem extends Component {

  

  state={
    posts: []

  };


  componentDidMount(){
   this.getBlogPost();
   
  };
  

  


  getBlogPost(){
    
    console.log("listitems "+profid);
    
    axios.post('http://localhost:4000/api5/'+profid)
    .then((response)=>{
      const data= response.data;
      this.setState({posts:data});

      console.log("data from mongo recieved to listitem")
      console.log(data);


    })
    .catch((error)=>{
      console.log("error is :"+error)
      console.log("data from mongo didnrt receive listiems");

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

    <h5>Customer Name : {item.name}</h5>
    <h5>Customer Contact Number : {item.phoneNo}</h5>
    <h5>Customer Email : {item.email}</h5>
    
  

         
          

    </div>

     )
       

         
   
       })

  }
}

export default OngoingProfListitem;

