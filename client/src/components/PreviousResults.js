import React, { Component } from 'react'
import { connect } from 'react-redux';
import { previousResults } from '../actions/userActions';

export class PreviousResults extends Component {
  componentDidMount() {
    const useremail = localStorage.getItem('userEmail');
    this.props.previousResultAction(useremail);
  }

  render() {
    if (this.props.isLoading === true) return <div>Loading...</div>
    const { previousResultsData } = this.props;
    if (previousResultsData.result.length === 0) return <div>No previous results found...</div>
    return (
      <div className="mt-5 container">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Keywords</th>
              <th scope="col">Positive</th>
              <th scope="col">Negative</th>
              <th scope="col">Neutral</th>
            </tr>
          </thead>
          <tbody>
            {previousResultsData.result.map(result =>
              <tr key={result._id}>
                <th scope="row">{result.keywords}</th>
                <td>{result.positive}</td>
                <td>{result.negative}</td>
                <td>{result.neutral}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    previousResultsData: state.user.previousResultsData,
    isLoading: state.user.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    previousResultAction: (useremail) => dispatch(previousResults(useremail))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviousResults);
