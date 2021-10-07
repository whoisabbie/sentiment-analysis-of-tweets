import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { saveResult } from '../actions/userActions';

export class Result extends Component {

  saveresult = () => {
    const userID = localStorage.getItem('userID');
    this.props.saveResult(this.props.sentimentResult, userID);
  }

  render() {
    const result = [
      this.props.sentimentResult.negative,
      this.props.sentimentResult.positive,
      this.props.sentimentResult.neutral
    ]
    const data = {
      labels: [
        'Negative',
        'Positive',
        'Neutral'
      ],
      datasets: [{
        data: result,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
    };
    if (!this.props.isLoggedIn) {
      return <Redirect to='/' />
    } else {
      if (this.props.isResultLoading === true) {
        return <div>Loading...</div>
      } else {
        return (
          <div className="row mt-5">
            <div className="col-md-6">
              <Doughnut
                data={data}
                options={{
                  title: {
                    display: true,
                    text: 'Result',
                    fontSize: 25
                  },
                  legend: {
                    display: true,
                    posiion: 'bottom'
                  }
                }}
              />
              <button className="btn btn-primary m-5" onClick={this.saveresult}>Save Result</button>
            </div>
            <div className="col-md-6">
              <div className="container">
                <div className="scrollable">
                  <table className="table table-responsive table-bordered table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Tweets</th>
                        <th scope="col">Sentiment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.sentimentResult.result.map(result =>
                        <tr key={result.id}>
                          <td scope="row">{result.text}</td>
                          <td>{result.sentiment}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    isResultLoading: state.user.isResultLoading,
    sentimentResult: state.user.sentimentResult
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveResult: (sentimentResult, userID) => dispatch(saveResult(sentimentResult, userID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
