import jwt_decode from "jwt-decode";
import React, { Component } from 'react';
import './Home.css';
import ListItemsProf from './ListItemsProf';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Sidebarprof from './Sidebarprof';
import NavigationBarprof from './NavigationBarprof';
import axios from 'axios';
const jwt = require('jsonwebtoken')
var token = document.cookie.split('=')[1];
library.add(faTrash);



export class ProfHome extends Component {

  state={
    role:'',
    posts: []
  };

  componentDidMount=()=>{
    this.setState({
      role:jwt_decode(document.cookie.split('=')[1]).role
    })
    this.getBlogPost(jwt_decode(document.cookie.split('=')[1]).role);
    
  };

  getBlogPost=(role)=>{
    
    
    axios.get('http://localhost:8000/api1/'+role)
    .then((response)=>{
      const data= response.data;
      console.log(data);
      this.setState({posts:data});
      console.log("data from mongo recieved to home")


    })
    .catch((error)=>{
      console.log("data from mongo didnrt receive");

    })
  }

  render() {
    console.log('State',this.state);
    return (
      
      
      <div className="Home">
        <NavigationBarprof />
      <Sidebarprof />
        <header>
          
           <ListItemsProf></ListItemsProf>
          

     </header>

      </div>
     
    )
  }
}

export default ProfHome;



