import React from 'react'
const { send } = require('micro')
const { router, get, post, put } = require('microrouter')
// import userdata from './forms/userdata.json'

// import CreateLogin from './create-login';
// userdata = document.getElementById(userdata(JSON))
fetch('http://localhost:3000/userdata.json');

class forgot extends React.Component {
  

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(event.target.email.value)
   put(event.target.email.value)}  
  render() {
        // const forgot = forgot
        
        
      return (
        // <Fragment>
        <form id = 'forgot'   onSubmit= {this.handleSubmit}
        // onClick = {console.log(this.inputElement)}
        >
            <input id = 'email' type="email" size="32" placeholder="Forgot Password? Enter your E-mail"required ref={node => (this.inputNode = node)}/>
            <button type='submit'>Forgot Password</button>
            
        </form>
        // </Fragment>
      )
    }
  
  }
  export default forgot