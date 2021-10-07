import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { userRegister } from '../actions/authActions';

export class SignUp extends Component {
  state = {
    usrFullName: "",
    usrEmail: "",
    usrPwd: "",
    disabled: "disabled",
    errors: {
      validateFullName: "",
      validateEmail: "",
      validatePwd: ""
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.userRegister(this.state.usrFullName, this.state.usrEmail, this.state.usrPwd);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'usrFullName':
        const usrFullNameregex = /(\w.+\s).+/i;
        errors.validateFullName =
          usrFullNameregex.test(value)
            ? 'is-valid'
            : 'is-invalid';
        break;

      case 'usrEmail':
        // eslint-disable-next-line
        const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        errors.validateEmail =
          regex.test(value)
            ? 'is-valid'
            : 'is-invalid';
        break;

      case 'usrPwd':
        errors.validatePwd =
          value.length < 8
            ? 'is-invalid'
            : 'is-valid';
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value });

      if(this.state.errors.validateFullName === 'is-valid' && this.state.errors.validateEmail === 'is-valid' && this.state.errors.validatePwd === 'is-valid') {
        this.setState({ disabled: "" });
      } else {
        this.setState({ disabled: "disabled" });
      }
  }

  render() {
    if(this.props.isLoggedIn) {
      return <Redirect to='/dashboard' />
    } else {
      const { authError } = this.props;
    if (this.props.isLoggedIn) {
      return <Redirect to='/dashboard' />
    } else {
      return (
        <div className="container">
          <div className="row mt-5">
            <div className="col"></div>
            <div className="col-md-7">
              <form className="bg-light p-5 shadow" onSubmit={this.onSubmit} noValidate>
                <h1>Sign Up!</h1>
                <div className="form-group">
                  <label htmlFor="exampleInputFullName1">Full Name</label>
                  <input name="usrFullName" type="email" className={`form-control ${this.state.errors.validateFullName}`} id="exampleInputFullName1" aria-describedby="emailHelp" placeholder="e.g. John Doe" value={this.state.usrFullName} onChange={this.handleChange} />
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                  <div className="invalid-feedback">
                    Please enter a valid user name.
                  </div>
                  <small id="emailHelp" className="form-text text-muted">Please enter your full name.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input name="usrEmail" type="email" className={`form-control ${this.state.errors.validateEmail}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="johndoe@example.com" value={this.state.usrEmail} onChange={this.handleChange} />
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                  <div className="invalid-feedback">
                    Please enter a valid email.
                  </div>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input name="usrPwd" type="password" className={`form-control ${this.state.errors.validatePwd}`} id="exampleInputPassword1" placeholder="********" value={this.state.usrPwd} onChange={this.handleChange} />
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                  <div className="invalid-feedback">
                    Password length must be eight characters.
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" disabled={this.state.disabled}>Submit</button>
                { authError ? <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>{authError}!</strong>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div> : null }
                {
                  this.props.authSuccess !== null ?
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>{this.props.authSuccess}</strong>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div> :
                  null
                }
              </form>
            </div>
            <div className="col"></div>
          </div>
        </div>
      )
    }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    authError: state.auth.authError,
    authSuccess: state.auth.authSuccess
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userRegister: (username, useremail, userpassword) => dispatch(userRegister(username, useremail, userpassword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
