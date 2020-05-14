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
    const {username,token} = this.props
    this.fetchUserData({username,token})

  }


  render(){
    const {username, token, date } = this.state.data
    return (
      <div className="userData">
         <p><strong>Username</strong></p>
         <p>{username}</p>
         <p><strong>Token:</strong></p>
         <p>{token}</p>
         <p><strong>Fecha:</strong></p>
         <p>{date}</p>
         <ButtonLogout />
      </div>
      
    )
  }
}