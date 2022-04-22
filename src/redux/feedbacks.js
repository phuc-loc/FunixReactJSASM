import * as ActionTypes from './ActionTypes';

export const Feedbacks = (state = {
    feedbacks: []
},
    action) => {

    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            alert('Thank you for your feedback!' + JSON.stringify(feedback));
            return { ...state, feedbacks: state.feedbacks.concat(feedback) };
        default:
            return state;

    }
};