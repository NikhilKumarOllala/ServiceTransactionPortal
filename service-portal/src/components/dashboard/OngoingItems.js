import React, { Component } from 'react'
import './Listitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
const Swal=require('sweetalert2');


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
    
    axios.post('http://localhost:4000/api1/getongoing',{id:custid})
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

  done(id,location1,profession1,body1,profid){

    const payload={
     
      c_id: custid,
      body:body1 ,
      location:location1,
      profession:profession1,
      p_id:profid
     
    };

    axios({
      url:'http://localhost:4000/api/done',
      method:'POST',
      data:payload

    }).then(()=>{
      console.log("data sent to server");
      Swal.fire({
        title: 'success',
        text: "success",
        icon: 'success',
        confirmButtonText: 'ok'
      }).then((result) =>{
          if (result.isConfirmed) {
            axios.post('http://localhost:4000/api1/deleteongoing',{postid:id})
            .then((response)=>{
      
              console.log("deleted from ongoing")
      
            })
            .catch((error)=>{
              console.log("error is :"+error)
              console.log("data from mongo didnrt receive listiems");
        
            })

            window.location.replace('/Ongoing')                         
          }
      })


    })
    .catch((error)=>{
      console.log("error while sending data",error);
    });


    


    


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
    
  

          <button id="done"  onClick={()=>this.done(item._id,item.location,item.profession,item.body,item.p_id)}>Done</button>
          

    </div>

     )
       

         
   
       })

  }
}

export default Listitems

