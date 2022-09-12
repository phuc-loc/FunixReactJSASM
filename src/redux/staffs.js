import * as ActionTypes from './ActionTypes';

export const Staffs = (
    state = {
        isLoading: true,
        errMess: null,
        staffs: []
    },
    action ) => {

    switch (action.type) {

        case ActionTypes.ADD_STAFFS:  //GET
            return {
                ...state,
                isLoading: false,
                errMess: null,

                staffs: action.payload
            }


        case ActionTypes.STAFFS_LOADING:
            return {
                ...state, errMess: null,
                staffs: [],

                isLoading: true
            }


        case ActionTypes.STAFFS_FAILED:
            return { ...state,
                 isLoading: false , 
                 staffs: [], 
                
                 errMess: action.payload
                }



        case ActionTypes.ADD_STAFF:  //POST
            var newstaff = action.payload;
            return { ...state, staffs: state.staffs.concat(newstaff) }



        case ActionTypes.UPDATE_STAFF: //PATCH
            return { ...state, isLoading: false, errMess: null, staffs: action.payload }


        //     // var newstaff = action.payload;
        //     // const updateStaff = state.staffs.map(staff => staff.id === newstaff.id
        //     //     ? { ...newstaff }    //nếu trùng id thì thay thế
        //     //     : { staff }          //nếu không trả về staff
        //     // )
        //     // return { ...state, staffs: updateStaff }

        //     //return{...state, staffs: state.staffs.concat() }

        //     return { ...state, 
        //                 isLoading: false, errMess: null, //??
        //                 staffs: action.payload }

        case ActionTypes.DELETE_STAFF: //DETELE
            return { ...state, isLoading: false, errMess: null, staffs: action.payload }

        default:
            return state;

    }
};