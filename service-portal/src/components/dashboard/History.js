import jwt_decode from "jwt-decode";
import React, { Component } from 'react';
import './Home.css';
import ListItemsCusHistory from './ListItemsCusHistory';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import NavigationBar  from './NavigationBar';
import axios from 'axios';

const jwt = require('jsonwebtoken')
var token = document.cookie.split('=')[1];
library.add(faTrash);






export class History extends Component {





  render() {
    
    return (
      
      
      <div className="Home">
        <NavigationBar />
        <Sidebar />
       
         
          <ListItemsCusHistory  ></ListItemsCusHistory>

     

      </div>
     
    )
  }
}

export default History;



