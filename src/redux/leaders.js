import * as ActionTypes from './ActionTypes';

export const Leaders = (state = 
    { isLoading: true,
    errMess: null,
    leaders:[] }, 
        action) => {
            
    switch(action.type) {
        //Case 1
        case ActionTypes.ADD_LEADERS:
        return {...state, 
                        isLoading: false, 
                        errMess: null, 
                        leaders: action.payload};
        //Case 2
        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []}
        //Case 3
        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        //Case cuoi
        default:
            return state ;
    }
}