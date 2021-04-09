import React, { Component } from 'react'
import Swal from 'sweetalert2';
import './postbar.css'
import axios from 'axios'
const jwt = require('jsonwebtoken')
var customer_id;

function getUserID(){
  var token = document.cookie.split('=')[1];
  jwt.verify(token,"thisisakeyforthejwtandisaccessedatthebackendonly",(err,decodedToken) => {
    if (err) {
        console.log(err);
    } else{
      customer_id = decodedToken;
    }
  })
}

function feedback(rating,review){
  rating = (rating * 5)/100;  
  rating = Math.round(rating);
  console.log("rating is " + rating);
  console.log("Review is "  + review);
  const feedBack = {
    rating : rating,
    review : review,
    id : customer_id
  }
  //axios.post('http://localhost:4000/app/feedback',feedBack)
  //.then(Response => {
   // console.log(Response);
  //})

}



export class Postbar extends Component {

    

    submit(Event){
        Event.preventDefault();        
        
         Swal.mixin({         
            
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2']
          }).queue([
            {
              title: 'Level of statisfaction',  
              input: 'range'  ,
              
              inputValue : '50'              
            },
            {
                title:'Review',
                input: 'textarea'  
            }
          ]).then((result) => {
            if (result.value) {
              var rating = result.value[0];
              var review = result.value[1];              
              Swal.fire({
                title: 'All done!',
                showCancelButton:true,
                html: `
                  rating:
                  <pre><code>${result.value[0]}%</code></pre>
                  review:
                  <pre><code>${result.value[1]}</code></pre>
                `,
                confirmButtonText: 'submit'
              }).then((result) => {
                if (result.isConfirmed) {
                  feedback(rating,review);
                }
              })
            }
          })
                  
          
    } 

    render() {
        return (
            <div className = "postbar">
                <h1>hello</h1>
                <h2>hii</h2>
                <div id="star-rating"></div>
                <button className="feedbackbtn"onClick={this.submit}>feedback</button>
                
            </div>
        )
    }
}

export default Postbar
