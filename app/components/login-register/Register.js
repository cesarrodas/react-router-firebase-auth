import React from 'react';
import firebaseUtils from '../../utils/firebaseUtils';

class Register extends React.Component {
  constructor () {
    super();
    this.state = {
      error: false
    }
  }
  handleSubmit (e) {
    e.preventDefault();
    let email = this.refs.email.value;
    let pw = this.refs.pw.value;
    firebaseUtils.createUser({email: email, password: pw}, (err) => {
      if(! err ){
          this.context.router.replace('/');
      } else {
        this.setState({error: err});
      }
    });
  }
  render () {
    let errors = this.state.error ? <p> {this.state.error} </p> : '';
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1> Register </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label> Email </label>
            <input className="form-control" ref="email" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input ref="pw" type="password" className="form-control" placeholder="Password" />
          </div>
          {errors}
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    )
  }
};

Register.PropTypes = {
  router: React.PropTypes.object.isRequired
}

export default Register;
