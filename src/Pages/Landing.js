import React, { Component } from 'react';
import { Title } from '../components/Title'
import LoginForm  from '../components/LoginForm'
import Home  from '../components/Home'

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