import React, { Component } from 'react';


export default class LoginForm extends Component {

  state = {
    userName: '',
    userPassword: '',
    error: ''
  }

  handleUserName = (e) => {
    this.setState({userName: e.target.value})
    console.log(this.state.userName)
  }
  handlePassword = (e) => {
    this.setState({userPassword: e.target.value})
    console.log(this.state.userPassword)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { userName, userPassword} = this.state

     fetch('http://localhost:8080/session', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify( {
              "password" : userPassword,
              "username": userName 
            })
        })
        .then(res => res.json())
        .then(results => {
          const { token } = results
          localStorage.token = token
          this.props.onResults(this.state.userName)

      })
    
  }


  render(){
    return(
      
      <form className = "loginform" onSubmit = {this.handleSubmit} >
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input 
              className="input" 
              onChange = {this.handleUserName}
              type="text" 
              placeholder="Username" 
              required/>
          </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input 
            className="input" 
            onChange = {this.handlePassword}
            type="password" 
            placeholder="Password" 
            required />
        </p>
      </div>
      <div className="field ">
        <p className="control">
          <button className="button is-success">
            Login
          </button>
        </p>
      </div>
      </form>

     
    )
  }

}