import React, { Component } from 'react';
import Feedback from './Feedback';
import AuthenticateUser  from '../logic/authenticate-user'
import KubikAPI from '../infrastructure/http'

export default class LoginForm extends Component {

  
  state = {
    userName: '',
    userPassword: '',
    error: undefined
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

    return(async()=>{
      try {
        const kubikAPI = new KubikAPI();
        const authenticate = new AuthenticateUser(kubikAPI);
        
        const { data } = await authenticate.authenticate(userName, userPassword)
        debugger
        localStorage.token = data.token
        this.props.onResults(this.state.userName)

      } catch({message}) {
        this.setState({error: message})
        
      }
       
  })()
  }


  render(){
    return(
      <div>
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
          <button className="button is-success">
            Login
          </button>
      </div>
      </form>


      {this.state.error && <Feedback message= {this.state.error} /> }

      </div>
     
    )
    
  }

}