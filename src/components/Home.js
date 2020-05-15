import React, { Component } from 'react';
import ButtonLogout from './ButtonLogout';
import Feedback from './Feedback';


import logic from '../logic';


export default class Home extends Component {

  state = { data: {} }

  fetchUserData =  async ({username,token}) => {
    try {          
      const data = await logic.retrieveUser(username, token)
      this.setState({data})
    
    } catch({message}) {
      this.setState({error: message})
   }
  
  }

  componentDidMount () {
    window.onload = window.localStorage.clear();
    const {username,token} = this.props
    this.fetchUserData({username,token})

  }


  render(){
    const {username, token, date } = this.state.data
    return (
    <div className="userData">
       <article className="message">
       <div className="message-header">
        <p className="userData_username">Hello {username}!</p>
        </div>
        <div className="message-body">
        <p className="userData_token"> <strong>Your token is:</strong></p>
         {token}
         <p><strong>Date</strong></p>
         {date}
      </div>
    </article>
    <ButtonLogout />
    {this.state.error &&<Feedback /> }
    </div>

 
    )
  }
}