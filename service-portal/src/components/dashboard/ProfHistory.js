import jwt_decode from "jwt-decode";
import React, { Component } from 'react';
import './Home.css';
import ListItemsProfHistory from './ListItemsProfHist';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Sidebarprof from './Sidebarprof';
import NavigationBarprof from './NavigationBarprof';
import axios from 'axios';
const jwt = require('jsonwebtoken')
var token = document.cookie.split('=')[1];
library.add(faTrash);






export class ProfHistory extends Component {





  render() {
    
    return (
      
      
      <div className="Home">
        <NavigationBarprof />
      <Sidebarprof />
       
         
          <ListItemsProfHistory  ></ListItemsProfHistory>

     

      </div>
     
    )
  }
}

export default ProfHistory;



