import React, { Component } from 'react'
import SearchBar from './SearchBar';
import PreviousResults from './PreviousResults';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class Dashboard extends Component {
  render() {
    if(!this.props.isLoggedIn) {
      return <Redirect to='/' />
    } else {
      return (
        <div>
          <div className="row">
            <SearchBar />
          </div>
          <PreviousResults />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps)(Dashboard);
