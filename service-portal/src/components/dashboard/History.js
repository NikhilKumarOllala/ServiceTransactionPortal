import jwt_decode from "jwt-decode";
import React, { Component } from 'react';
import './Home.css';
import ListItems from './Listitems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import NavigationBar  from './NavigationBar';
import axios from 'axios';
const jwt = require('jsonwebtoken')
var token = document.cookie.split('=')[1];
library.add(faTrash);






export class History extends Component {


  

  //  change=(e,id)=> {
  //   console.log(e,id);
  
  //   axios.patch('http://localhost:8000/api/'+id, 
  //   { 
      
  //     status: e.target.value
  //   }, 
    
  // );
  // this.setState({
  //   status:e.target.value,

  // });
  
  
  
   
  // }

  state={
    
    c_id:'',
    body:'',
    location:'',
    profession:'',
    posts: [],
    status:'',
    pid:''
  };
  
  componentDidMount=()=>{
    this.setState({
      c_id:jwt_decode(document.cookie.split('=')[1]).id
    })
    this.getBlogPost(jwt_decode(document.cookie.split('=')[1]).id);
    
  };

  getBlogPost=(c_id)=>{
    console.log(c_id);
    
    axios.get('http://localhost:8000/api2/'+c_id)
    .then((response)=>{
      const data= response.data;
      this.setState({posts:data});
      console.log("data from mongo recieved to history")


    })
    .catch((error)=>{
      console.log("data from mongo didnrt receive");

    })
  }



  render() {
    console.log('State',this.state);
    return (
      
      
      <div className="Home">
        <NavigationBar />
        <Sidebar />
       
         
          <ListItems items={this.state.posts} change={this.change} ></ListItems>

     

      </div>
     
    )
  }
}

export default History;



