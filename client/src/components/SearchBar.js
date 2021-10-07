import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import { findResult } from '../actions/userActions';

export class SearchBar extends Component {
  state = {
    search: "",
    validateSearch: ""
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
    const { value } = event.target;
    if (value === "") {
      this.setState({ validateSearch: "is-invalid" });
    } else {
      this.setState({ validateSearch: "is-valid" });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.validateSearch === 'is-valid') {
      this.props.findResult(this.state.search);
      this.props.history.push('/result');
    }
  }

  render() {
    return (
      <>
        <div className="col-md-2"></div>
        <div className="col-md-8 bg-light shadow mt-3" >
          <form className=" p-5  needs-validation" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputSearch1">Search anything</label>
              <input name="search" type="text" className={`form-control ${this.state.validateSearch}`} id="exampleInputSearch1" aria-describedby="emailHelp" value={this.state.search} onChange={this.handleChange} />
              <div className="valid-feedback">
                Looks good!
            </div>
              <div className="invalid-feedback">
                Search text field cannot be empty.
            </div>
              <small id="textHelp" className="form-text text-muted">Search for any Topics and perform analysis.</small>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
        <div className="col-md-2"></div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findResult: (search) => dispatch(findResult(search))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(SearchBar));
