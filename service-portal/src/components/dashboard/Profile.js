import React, { Profiler ,useEffect,useState,Component} from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import axios from "axios";
import NavigationBar from './NavigationBar';
import { render } from 'react-dom';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 

const Hemlo =styled.div`
margin-top: 1em;
margin-left: 6em;
margin-right: 6em;

`;

// export const Profile = () => (

//   <Hemlo>
//     <NavigationBar />
//       <Sidebar />
//      <h2>USER PROFILE for customer</h2>
//     <p>Customer profile</p>
//   </Hemlo>

// )


var cID;

const jwt = require('jsonwebtoken')
function getUserID(){
    var token = document.cookie.split('=')[1];
    jwt.verify(token,"thisisakeyforthejwtandisaccessedatthebackendonly",(err,decodedToken) => {
      if (err) {
          console.log(err);
      } else{
        cID = decodedToken.id;
      }
    })
  }


export class Profile extends Component {
      render() {
        getUserID();
        


        return (
          <div>
            <h1> Hi {cID}</h1>
          </div>
        )
      }
    }

    
    
    export default Profile