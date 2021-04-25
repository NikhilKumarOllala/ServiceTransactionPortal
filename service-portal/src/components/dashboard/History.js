import jwt_decode from "jwt-decode";
import React, { Component } from 'react';
import './Home.css';
import ListItemsCusHistory from './ListItemsCusHistory';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import NavigationBar  from './NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Postbar from '../feedback/Postbar';
import axios from 'axios';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 

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



