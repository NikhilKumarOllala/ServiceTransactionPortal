import React, { Component } from 'react'
import StarRating from './StarRating'

export class Feedback extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign:'center'}}>Feedback</h1>
                <StarRating ></StarRating>
            </div>
            
        )
    }
}

export default Feedback
