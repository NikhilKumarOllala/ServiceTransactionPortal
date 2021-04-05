
import React, { Component } from 'react';
//import '/ServiceTransactionPortal/service-portal/src/components/stylesheets/Home.css';
//import ListItems from './Listitems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);

export class Home extends Component {

  state={
    title:'',
    body:''
  };
  
   

  render() {
    return (
      <div className="Home">
        <header>
          <form>
            <div className="form-input">
            <input 
            type="text" 
            placeholder="Enter Text" 
            name="title"
         value={this.state.title}
         onChange={3}/>
         
            </div>

            <div className="form-input">
            <textarea 
            placeholder="Enter body" 
            name="body" 
            cols="30" 
            rows="10"
         value={this.state.body}
         onChange={3}>
         </textarea>
         
            </div>
            <button type="submit">Add Post</button>

          

          </form>
       
         
         
       
     </header>
     
     
     



      </div>
     
    )
  }
}

export default Home;


