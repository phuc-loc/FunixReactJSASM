import { createStore, combineReducers, applyMiddleware } from 'redux';
import {createForms} from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {InitialFeedback} from './forms';
import { Feedbacks } from './feedbacks.js';


export const ConfigureStore = () => {

    const store = createStore ( 
         //mỗi khi có action Create --> sẽ đc update 
        combineReducers(  
            {
                dishes : Dishes,
                comments: Comments,  
                promotions : Promotions,
                leaders : Leaders,

                ...createForms(   
                    { feedback: InitialFeedback}  
                ),

                feedbacks:  Feedbacks
            }
        ),
        applyMiddleware(thunk, logger)  //,inhance (nâng cao)
    );

    return store;
    
};