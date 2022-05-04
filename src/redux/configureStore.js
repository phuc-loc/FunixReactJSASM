import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Staffs } from './staffs';
import { Departments } from './departments';
import {Salary } from './salary';




export const ConfigureStore = () => {

    const store = createStore ( 
         //mỗi khi có action Create --> sẽ đc update 
        combineReducers(  
            {
                staffs : Staffs,
                departments : Departments,
                salary: Salary
            }
        ),
        applyMiddleware(thunk, logger)  //,inhance (nâng cao)
    );

    return store;
    
};