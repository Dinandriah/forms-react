import React, {Component} from 'react'
// import forgot from 'forgot'
// import CreateLogin from 'create-login'

class login extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.email.value)
    console.log(event.target.pass.value)}  
    render() {
    
     return (
       
      <form id = 'login' onSubmit= {this.handleSubmit}>
      Username <input id='email' type="email" placeholder="E-mail"required ref={node => (this.inputNode = node)}/> <br/>
      Password <input id = 'pass' type="password" placeholder="Password"required ref={node => (this.inputNode = node)}/><br/>

        <button>Login</button>

      </form>

      )
    
    //   this.props.create()
    //   this.props.forgot()
      }
    }
  
  
  
  export default login