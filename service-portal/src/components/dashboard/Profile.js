import React, { Profiler ,useEffect,useState,Component} from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import "./Profile.css";

import axios from "axios";
import Sidebar from './Sidebar';
import NavigationBar  from './NavigationBar';
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
      state = {
        name:'',
        email:'',
        phoneno:''
      }

     getdetails(){
       axios.get('http://localhost:4000/profileretrieve/'+cID)
    .then((response)=>{
      const data= response.data;
       console.log(data);
      this.setState({name:data[0]['fullName'],email:data[0]['email'],phoneno:data[0]['phoneNo']});
            // console.log(data[0]['fullName']);
      console.log("data from mongo recieved to profile")
    })
    .catch((error)=>{
      console.log("data from mongo didn't receive");

    })
  }

  UpdateProfileHandler=(e)=>{
    e.preventDefault();
    //create object of form data
    const formData=new FormData();
    formData.append("cID",this.state.cID);

    //update-profile
    axios.post('http://localhost:4000/update-profile/',formData,{
        headers: {
            "content-type": "application/json"
          }
    }).then(res=>{
        console.log(res);
       this.setState({msg:res.data.message});
       this.setState({email:res.data.results.email});
    })
    .catch(err=>console.log(err))
}


  componentDidMount(){
    this.getdetails();
  }

      render() {
        getUserID();
        return (
          <div>
          <NavigationBar/>
           <Sidebar/>
          <div className = 'profile'> 
          <div className='mt-3'>
            <Card style={{ width: '50rem' },{height: '43rem'}}>
              <Card.Body>
          <Container>
        <Row >
        <Col>
            <h1 style={{color:'black' , fontSize:'3rem',marginRight:'130px',marginBottom:'0px'}}>USER PROFILE</h1>
            <Form className="form" style={{color:'black'}}>  
            {/* <Card.Img variant="top" className="im" style={{marginRight:'-60px'}}src="https://us.123rf.com/450wm/kritchanut/kritchanut1401/kritchanut140100054/25251050-businessman-avatar-profile-picture.jpg?ver=6"/> */}

            {/* <p> {this.state.msg}</p>    */}
  <Form.Group controlId="formCategory1">
    <Form.Label className = "labels" style={{color:'black', fontSize:'1rem',marginBottom:'-300px'}}>Username</Form.Label>
    <Form.Control type="text" style={{color:'black'}} defaultValue={this.state.name}/>
  </Form.Group>

  <Form.Group controlId="formCategory2">
    <Form.Label style={{color:'black', fontSize:'1rem'}}>Email</Form.Label>
    <Form.Control type="email" style={{color:'black'}} defaultValue={this.state.email} />
  </Form.Group>

  <Form.Group controlId="formCategory2">
    <Form.Label style={{color:'black', fontSize:'1rem'}}>Phone No</Form.Label>
    <Form.Control type="phone" style={{color:'black'}} defaultValue={this.state.phoneno} />
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
      </div>
        )
      }
    }


    
    export default Profile
    