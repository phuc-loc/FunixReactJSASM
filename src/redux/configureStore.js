import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const ConfigureStore = () => {

    const store = createStore(

        combineReducers(
            {
            dishes : Dishes,
            comments: Comments,  //Nhận từ action (thay đổi state của comments.js)
            promotions : Promotions,
            leaders : Leaders
            }
        )

    );
    return store;
    
};