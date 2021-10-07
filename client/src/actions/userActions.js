import axios from 'axios';

export const previousResults = (useremail) => {
    return (dispatch, getState) => {
        axios.get(`http://localhost:5000/user/previousresults/${useremail}`)
            .then(res => {
                dispatch({ type: 'FETCH_PREVIOUS_RESULTS', data: res.data })
            })
            .catch(err => {
                dispatch({ type: 'FETCH_PREVIOUS_RESULTS_FAILED', data: err });
            });
    }
};

export const findResult = (search) => {
    return (dispatch, getState) => {
        //console.log(search)
        axios.post('http://localhost:5000/user/result', { search })
            .then(res => {
                //console.log(res);
                console.log('findresult action...')
                dispatch({ type: 'FIND_SENTIMENT_SUCCESS', data: res.data })
            })
            .catch(err => {
                dispatch({ type: 'FIND_SENTIMENT_FAILED', data: err });
            })
    }
}

export const saveResult = (sentimentResult, userID) => {
    return (dispatch, getState) => {
        axios.post('http://localhost:5000/user/saveresult', { sentimentResult, userID })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err)
            })
    }
}