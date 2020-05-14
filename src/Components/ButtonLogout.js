import React from 'react';
import {withRouter} from 'react-router-dom'

function Home (props) {

  const { history } = props

  const handleClick = (e) => {
    e.preventDefault()
    localStorage.clear()
    history.push('/')
    }

    return (
      <button 
          onClick = {handleClick}
          className= 'button is-info'
      > 
          Logout
      </button>
    )
   
}

export default withRouter(Home)
