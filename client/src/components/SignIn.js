import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin } from '../actions/authActions';

export class SignIn extends Component {
  state = {
    usrEmail: "",
    usrPwd: "",
    errors: {
      validateEmail: "",
      validatePwd: ""
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.userLogin(this.state.usrEmail, this.state.usrPwd);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'usrEmail':
        // eslint-disable-next-line
        const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        errors.validateEmail = regex.test(value)
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
  }

  render() {
    const { authError } = this.props;
    if (this.props.isLoggedIn) {
      return <Redirect to='/dashboard' />
    } else {
      return (
        <div className="container">
          <div className="row mt-5">
            <div className="col"></div>
            <div className="col-md-7">
              <form className="bg-light p-5 shadow needs-validation" onSubmit={this.onSubmit}>
                <h1>Sign In!</h1>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input name="usrEmail" type="email" className={`form-control ${this.state.errors.validateEmail}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="johndoe@example.com" value={this.state.usremail} onChange={this.handleChange} />
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
                  <input name="usrPwd" type="password" className={`form-control ${this.state.errors.validatePwd}`} id="exampleInputPassword1" placeholder="********" value={this.state.usrpwd} onChange={this.handleChange} />
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                  <div className="invalid-feedback">
                    Password length must be eight characters.
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                {authError ? <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  <strong>{authError}!</strong>
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div> : null}
              </form>
            </div>
            <div className="col"></div>
          </div>
        </div>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (useremail, userpassword) => dispatch(userLogin(useremail, userpassword))
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    authError: state.auth.authError
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
