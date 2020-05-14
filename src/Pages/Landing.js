import React, { Component } from 'react';
import { Title } from '../Components/Title'
import LoginForm  from '../Components/LoginForm'
import Home  from '../Components/Home'

export default class Login extends Component {


  state = { login: false, username: '' }

  handleResults = (username) => {
    this.setState({username, login: true})
  }

  renderResults = () => {
    const { username } = this.state
    return (
       <div>
          {localStorage.token && <Home  username ={username} token={localStorage.token}/> }
       </div>
    )}

  render(){
 
    return(
      <div className="body-app">
        {!localStorage.token && <div className="App">
          <Title>Welcome to KubikData</Title>
          <LoginForm  onResults = {this.handleResults}/>
        </div>
        }
        {this.state.login && this.renderResults()}
      </div>
    )
  }

}