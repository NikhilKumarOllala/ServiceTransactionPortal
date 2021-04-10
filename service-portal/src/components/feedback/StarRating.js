import React ,{useState} from 'react'
import { FaStar } from 'react-icons/fa'
import './StarRating.css'
var rName;
var rColour;
function rating_name(rating){    
    switch (rating) {
        case 1:
            rName = 'worst'
            rColour = '#ffc107'
            break;           
        case 2:
            rName = 'bad'
            rColour = '#ffc111'
            break;
        case 3:
            rName = 'average'
            rColour = '#ff1111'
            break;
        case 4:
            rName = 'good'
            rColour = '#fff107'
            break;
        case 5:
            rName = 'best'
            rColour = '#fffff'
            break;            
        default:
            rName = 'none'
            break;
           
    } 
    return rName;
}
function StarRating() {
    const [ rating , setRating ] = useState(null)
    const [ hover , setHover ] = useState(null)
    

    return (
        <div>
            <h1>Rating </h1>
            {[...Array(5)].map((star,i) => {
                const ratingValue = i + 1;

                return <label>
                    <input type="radio" name="rating" value={ratingValue}                                       
                     onClick={() => setRating(ratingValue)}></input>
                    <FaStar className = "star" size={100}  
                    onMouseEnter = {() => setHover(ratingValue)}                    
                    onMouseLeave = {() => setHover(null)}                    
                    color ={ratingValue <= (hover||rating) ? "#ffc107" : "#e4e5e9"}/>
                    </label>                    
            })}
            <h2 id='m'color= '#e4e5e9'>{rating_name(rating)}</h2>
            <h1>Review :</h1>
            <textarea  type = 'text' className="review"  ></textarea>
            <br></br>
            <button>submit</button>
            
            
            
            
        </div>
    )
    
}

export default StarRating
