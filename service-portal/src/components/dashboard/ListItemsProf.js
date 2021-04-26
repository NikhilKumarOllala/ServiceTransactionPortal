import React, { Component } from 'react'
import './Listitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


const Swal=require('sweetalert2');
const jwt = require('jsonwebtoken')

 

  
var profession;
var pid;

function getUserrole(){
  profession=jwt_decode(document.cookie.split('=')[1]).role;
  pid=jwt_decode(document.cookie.split('=')[1]).id;


}


export class ListItemsProf extends Component {

  

  state={
      pid:'',
      Done:'',
    posts: [],
    cust:[]
    

  };



  componentDidMount(){
   this.getBlogPost();
 
  };
  
getCustDetails(id){
  console.log("get cust details :" + id);
  axios.get('http://localhost:4000/api3/'+id)
  .then((response)=>{
    const data= response.data;
   
    this.setState({cust:data});

    console.log("retrieve cust data from mongo for posts")
    console.log(data);


  })
  .catch((error)=>{
    console.log("data from mongo didnrt receive");

  })

}
  
 

  getBlogPost(){
    
    console.log("listitems "+profession);
    
    axios.get('http://localhost:4000/api1/'+profession)
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
  take(id,location1,profession1,body1,custid){
    
   
    const payload={
     
      c_id: custid,
      body:body1 ,
      location:location1,
      profession:profession1,
      p_id:pid
     
    };

    axios({
      url:'http://localhost:4000/api1/ongoing',
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
            axios.post('http://localhost:4000/api/deleteavailable',{postid:id})
            .then((response)=>{
      
              console.log("deleted from available")
      
            })
            .catch((error)=>{
              console.log("error is :"+error)
              console.log("data from mongo didnrt receive listiems");
        
            })


            window.location.replace('/profHome')                         
          }
      })

      

      
     

    })
    .catch((error)=>{
      console.log("error while sending data",error);
    });




  }


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

    
    
   
   
    
    

    <button id="take" onClick={()=>this.take(item._id,item.location,item.profession,item.body,item.c_id)}>Take this job</button>
    
    <Accordion defaultActiveKey="0">
<Row className="m-0">
<Col className="">
<Row className="px-0" style={{padding:'0px'}}>
<Accordion.Toggle as={Button} className="px-0" variant="link" eventKey="1">
Click to View More
</Accordion.Toggle>
</Row>
<Accordion.Collapse eventKey="1">
<Card style={{color:"black"}}>
<h3>Name : Vamshi</h3>
<h3>email : f20190095@hyderabad.bits-pilani.ac.in</h3>
<h3>phno : 7729903048</h3>
</Card>
</Accordion.Collapse>
</Col>
</Row>
</Accordion>
   


    </div>

     )
       
         
           
           
         
   
       })
    
    
    
 

  }
}

export default ListItemsProf

