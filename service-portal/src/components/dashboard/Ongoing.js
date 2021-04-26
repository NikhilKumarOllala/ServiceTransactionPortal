import jwt_decode from "jwt-decode";
import React, { Component } from 'react';
import './Home.css';
import OngoingItems from './OngoingItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import NavigationBar  from './NavigationBar';
import axios from 'axios';

const Swal = require('sweetalert2')
const jwt = require('jsonwebtoken')
var token = document.cookie.split('=')[1];
library.add(faTrash);


var custid;



export class Ongoing extends Component {
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
    custid=jwt_decode(document.cookie.split('=')[1]).id;
    console.log('State',this.state);
    return (
      
      
      <div className="Home">
        <NavigationBar />
        <Sidebar />
        <view_feed_prof props={"hello"}/>

          
          <OngoingItems/>

    

      </div>
     
    )
  }
}

export default Ongoing;



