import jwt_decode from "jwt-decode";
import React, { Component } from 'react';
import './Home.css';
import OngoingItems from './OngoingItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Sidebarprof from './Sidebarprof';
import NavigationBarprof from './NavigationBarprof';
import axios from 'axios';
import OngoingProfListItem from './OngoingProfListItem';
import {Card} from 'react-bootstrap'

const Swal = require('sweetalert2')
const jwt = require('jsonwebtoken')
var token = document.cookie.split('=')[1];
library.add(faTrash);


var profid;



export class OngoingProf extends Component {
  constructor(props) {
    super(props)
  
    
  }
  


  state={
    
    c_id:'',
    body:'',
    location:'',
    profession:'',
    posts: [],
    status:'',
    pid:'',
  };
  
  componentDidMount=()=>{
    this.setState({
      c_id:jwt_decode(document.cookie.split('=')[1]).id
    })
    //this.getBlogPost(jwt_decode(document.cookie.split('=')[1]).id);
    
  };




  render() {
    profid=jwt_decode(document.cookie.split('=')[1]).id;
    console.log('State',this.state);
    return (
      
      
      <div className="Home">
       <NavigationBarprof />
      <Sidebarprof />
       
         
          <OngoingProfListItem  ></OngoingProfListItem>

    

      </div>
     
    )
  }
}

export default OngoingProf;



