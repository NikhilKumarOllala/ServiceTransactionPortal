import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


import Sidebarprof from './Sidebarprof';
import NavigationBarprof from './NavigationBarprof';
import View_feed_prof from '../feedback/view_feed_prof'
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
align-text=center;

`;




export const ProfHistory = () => (

  <div>
 <Hemlo>
 
 <h2>USER HISTORY professional</h2>
    <p>TRFDHHJD</p>
    <View_feed_prof />
     
 </Hemlo>
    

    </div>

    
 
   

 
  
  
   
  
)