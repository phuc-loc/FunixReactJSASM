import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    console.log('store',store);
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions,
            ...createForms({
                feedback: InitialFeedback
            })      
        }),
        applyMiddleware( thunk, logger ) //inhance cua createStore, dùng để chặn hành động -> thực hiện fetch trước (nêú có)
    );
   
    return store;
}