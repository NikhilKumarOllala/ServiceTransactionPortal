import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';

import NavigationBarprof from './NavigationBarprof';
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
<<<<<<< HEAD
    
=======
    <NavigationBarprof />
      <Sidebar />
     <h2>USER PROFILE</h2>
    <p>TRFDHHJDSAFGAG</p>
>>>>>>> 9e06411df2ad7621a8915f0300a091bc23460a22
  </Hemlo>

)