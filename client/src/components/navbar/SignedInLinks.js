import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class SignedInLinks extends React.Component {

    handleLogout = () => {
        this.props.logout();
    }

    render() {
        return (
            <>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={this.handleLogout}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => { dispatch({ type: 'USER_LOGOUT' }) }
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);