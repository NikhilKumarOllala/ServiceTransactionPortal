import React, { Profiler ,useEffect,useState,Component} from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import "./ProfProfile.css";
import Sidebar from './Sidebarprof';
import axios from "axios";
import NavigationBar from './NavigationBarprof';
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
var pID;

const jwt = require('jsonwebtoken')
function getUserID(){
    var token = document.cookie.split('=')[1];
    jwt.verify(token,"thisisakeyforthejwtandisaccessedatthebackendonly",(err,decodedToken) => {
      if (err) {
          console.log(err);
      } else{
        pID = decodedToken.id;
      }
    })
  }
    
    export class ProfProfile extends Component {
      state = {
        vname:'',
        voccupation:'',
        vlocation:'',
        vemail:'',
        vphoneno:'',
        vgender:'',
        vexperience:''

      }

     getdetails(){
       axios.get('http://localhost:4000/profileretrieve_prof/'+pID)
    .then((response)=>{
      const data= response.data;
       console.log(data);
      this.setState({vname:data[0]['fullName'],voccupation:data[0]['occupation'],vlocation:data[0]['location'],vemail:data[0]['email'],vphoneno:data[0]['phoneNo'],vgender:data[0]['gender'],vexperience:data[0]['experience']});
            console.log(data[0]['fullName']);
      console.log("data from mongo recieved to profile")
    })
    .catch((error)=>{
      console.log("data from mongo didn't receive");

    })
  }
  componentDidMount(){
    this.getdetails();
  }

      render() {
        getUserID();
        return (
          // <NavigationBar/>
          // <Sidebar/>
          <div className = 'profile'> 
          <div className='mt-3'>
            <Card style={{ width: '50rem' },{height: '80rem'}}>
              <Card.Body>
              <Container>
        <Row >
        <Col>
            <h1 style={{color:'black' , fontSize:'3rem',marginRight:'130px'}}>USER PROFILE</h1>
            <Form className="form" style={{color:'black'}}>  
            <Card.Img variant="top" className="im" style={{marginRight:'-40px'}}src="https://us.123rf.com/450wm/kritchanut/kritchanut1401/kritchanut140100054/25251050-businessman-avatar-profile-picture.jpg?ver=6"/>

            {/* <p> {this.state.msg}</p>    */}
  <Form.Group controlId="formCategory1">
    <Form.Label className = "labels" style={{color:'black', fontSize:'1rem',marginBottom:'-300px',margin:'-0.8em'}}>Username</Form.Label>
    <Form.Control type="text" style={{color:'black'}} defaultValue={this.state.vname}/>
  </Form.Group>

  <Form.Group controlId="formCategory2">
    <Form.Label style={{color:'black', fontSize:'1rem'}}>Profession</Form.Label>
    <Form.Control type="text" style={{color:'black'}} defaultValue={this.state.voccupation} />
  </Form.Group>

  <Form.Group controlId="formCategory2">
    <Form.Label style={{color:'black', fontSize:'1rem'}}>Location</Form.Label>
    <Form.Control type="text" style={{color:'black'}} defaultValue={this.state.vlocation} />
  </Form.Group>

  <Form.Group controlId="formCategory2">
    <Form.Label style={{color:'black', fontSize:'1rem'}}>Email</Form.Label>
    <Form.Control type="email" style={{color:'black'}} defaultValue={this.state.vemail} />
  </Form.Group>

  <Form.Group controlId="formCategory2">
    <Form.Label style={{color:'black', fontSize:'1rem'}}>Phone No</Form.Label>
    <Form.Control type="phone" style={{color:'black'}} defaultValue={this.state.vphoneno} />
  </Form.Group>

  <Form.Group controlId="formCategory2">
    <Form.Label style={{color:'black', fontSize:'1rem'}}>Gender</Form.Label>
    <Form.Control type="phone" style={{color:'black'}} defaultValue={this.state.vgender} />
  </Form.Group>

  <Form.Group controlId="formCategory2">
    <Form.Label style={{color:'black', fontSize:'1rem'}}>Experience</Form.Label>
    <Form.Control type="phone" style={{color:'black'}} defaultValue={this.state.vexperience} />
  </Form.Group>

  <Button variant="primary" onClick={this.UpdateProfileHandler}>Update Profile</Button>
  </Form>
   </Col>

       </Row>
        </Container>
        </Card.Body>
           </Card>
      </div>
      </div>
        )
      }
    }


    
    export default ProfProfile
    