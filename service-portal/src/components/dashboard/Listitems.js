import React, { Component } from 'react'
import './Listitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


const jwt = require('jsonwebtoken')

 

  
var custid;

function getUserID(){
  var token = document.cookie.split('=')[1];
  jwt.verify(token,"thisisakeyforthejwtandisaccessedatthebackendonly",(err,decodedToken) => {
    if (err) {
        console.log(err);
    } else{
      custid= decodedToken.id;
     
    }
  })
}




export class Listitems extends Component {

  

  state={
    posts: []

  };


  componentDidMount(){
   this.getBlogPost();
   
  };
  

  
 

  getBlogPost(){
    
    console.log("listitems "+custid);
    
    axios.get('http://localhost:4000/api/'+custid)
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
    <br></br>
    <p>Price(Approx.) in rupees: {item.price}</p>
   
    
  

         
          

    </div>

     )
       

         
   
       })

  }
}

export default Listitems

