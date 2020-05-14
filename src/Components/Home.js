import React, { Component } from 'react';
import ButtonLogout from './ButtonLogout';

export default class Home extends Component {

  state = { data: {} }

  fetchUserData = ({username,token}) => {
    fetch(`http://localhost:8080/info/${username}/${token}`)
    .then(res => res.json())
    .then(data => {
     this.setState({data})
    })
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
        <p className="userData"> <strong>Your token is:</strong></p>
         {token}
         <p><strong>Date</strong></p>
         {date}
      </div>
    </article>
    <ButtonLogout />
    </div>

 
    )
  }
}