import React, { Profiler } from 'react';
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

export const Profile = () => (

  <Hemlo>
    <NavigationBar />
      <Sidebar />
     <h2>USER PROFILE for customer</h2>
    <p>Customer profile</p>
  </Hemlo>

)

//jwt auth
// var cID;
// const jwt = require('jsonwebtoken')
// useEffect(() => {
//   setLoading(true);
//   axios
//     .get("http://localhost:4000/professionals/myprofile")
//     .then((res) => {
//       setprofessionals(res.data);
//       setLoading(false);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, []);

// export class Profile{
//     var token = document.cookie.split('=')[1];
//     jwt.verify(token,"thisisakeyforthejwtandisaccessedatthebackendonly",(err,decodedToken) => {
//       if (err) {
//           console.log(err);
//       } else{
//          cID = decodedToken.id;
//       }
//     })
//     render(){
//       return(
//         <h1> cID </h1>
//       )
//     }
//   }


//  export class Profile {
//    render() {
//     var customerID = getUserID();
//      return(
//      <div>
//      <NavigationBar/>
//      <Sidebar/>
  

//   <h1> {this.customerID} </h1>;
//   </div>
//      );
//   }
// }