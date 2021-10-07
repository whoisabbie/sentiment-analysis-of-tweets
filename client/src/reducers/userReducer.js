const initState = {
    isLoading: true,
    isResultLoading: true,
    previousResultsData: {},
    previousResultsDataError: {},
    sentimentResult: {}
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_PREVIOUS_RESULTS':
            return {
                ...state,
                previousResultsData: action.data,
                isLoading: false
            }

        case 'FETCH_PREVIOUS_RESULTS_FAILED':
            return {
                ...state,
                previousResultsDataError: action.data,
                isLoading: false
            }

        case 'FIND_SENTIMENT_SUCCESS':
            console.log('find result success');
            return {
                ...state,
                sentimentResult: action.data,
                isResultLoading: false
            }

        case 'FIND_SENTIMENT_FAILED':
            return {
                ...state,
                sentimentResult: action.data,
                isResultLoading: false
            }

        default:
            return state;
    }
}

export default userReducer