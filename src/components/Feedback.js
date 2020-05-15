import React from 'react'

const Feedback = (props) => {
    
    return  <div> 
             <p className = "feedback__text">{props.message}</p>
        </div>
}

export default Feedback