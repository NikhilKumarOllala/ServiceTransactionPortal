import jwt_decode from "jwt-decode";
import React, { Component } from 'react';
import './Home.css';
import ListItems from './Listitems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import NavigationBar  from './NavigationBar';
import axios from 'axios';
const jwt = require('jsonwebtoken')
var token = document.cookie.split('=')[1];
library.add(faTrash);



export class Home extends Component {

  state={
    
    c_id:'',
    body:'',
    location:'',
    profession:'',
    posts: []
  };
  componentDidMount=()=>{
    this.setState({
      c_id:jwt_decode(document.cookie.split('=')[1]).id
    })
    this.getBlogPost(jwt_decode(document.cookie.split('=')[1]).id);
    
  };

  getBlogPost=(c_id)=>{
    console.log(c_id);
    
    axios.get('http://localhost:8000/api/'+c_id)
    .then((response)=>{
      const data= response.data;
      this.setState({posts:data});
      console.log("data from mongo recieved to home")


    })
    .catch((error)=>{
      console.log("data from mongo didnrt receive");

    })
  }

  

            

  handleChange=(event)=>{
    const target=event.target;
    const name=target.name;
    const value = target.value;
    
    this.setState({
      [name]: value
    });

  };

  submit = (event)=>{
    //event.preventDefault();
    const payload={
     
      c_id: jwt_decode(document.cookie.split('=')[1]).id,
      body: document.getElementById('body').value,
      location:document.getElementById('location').value,
      profession:document.getElementById('profession').value,
    };

    axios({
      url:'http://localhost:8000/api/save',
      method:'POST',
      data:payload

    }).then(()=>{
      console.log("data sent to server");
     
      this.resetUserInput();
      this.getBlogPost();
    })
    .catch((error)=>{
      console.log("error while sending data",error);
    });
    

   
  };

  resetUserInput=()=>{
    this.setState({
      body:''
     
    });
  };
  deleteItem(key){
    const filteredItems= this.state.items.filter(item => item.key!==key);
    this.setState({
      items:filteredItems
    })

  }

 
  


  render() {
    console.log('State',this.state);
    return (
      
      
      <div className="Home">
        <NavigationBar />
        <Sidebar />
        <header>
          
          <form onSubmit={this.submit}>
            <div className="form-input">
            <label htmlFor="profession" className='grey-text'>
                    Profession :
                </label>
                &nbsp;&nbsp;
                <select name="profession" id="profession" className="dropdown" placeholder='profession'>
                    
                    <option value="carpenter" placeholder='profession'>Carpenter</option>
                    <option value="electrician">Electrician</option>
                    <option value="tutor">Tutor</option>
                    <option value="other">Other</option>
                    
                </select>

                <label htmlFor="city" className='grey-text'>
                    City:
                </label>
                &nbsp;&nbsp;
                <select name="city" id="location" className="dropdown" placeholder='city'>
                    
                    <option value="Hyderabad" placeholder='city'>Hyderabad</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Other">Other</option>
                    
                </select>
                <br></br>
            
         
            </div>

            <div className="form-input">
            <textarea 
            placeholder="Enter body" 
            name="body" 
            cols="30" 
            rows="10"
            id='body'
         value={this.state.body}
         onChange={this.handleChange}>
         </textarea>
         
            </div>
           
            <button type="submit">Add Post</button>
            

          </form>
          {/* <div className="blog-">
            {
              
              this.displayBlogPost(this.state.posts)
            }
          </div> */}
          <ListItems items={this.state.posts} ></ListItems>

     </header>

      </div>
     
    )
  }
}

export default Home;



