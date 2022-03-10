import { STAFFS } from '../shared/staffs';
import newStaffList from '../shared/localStaffs';

export const initialState = {
    staffs: STAFFS
    //staffs: [ ...STAFFS, ...(newStaffList ?? []) ]
};

export const Reducer = (state = initialState, action) => {

    // switch (action.type) {
    //     case 'SEARCH_STAFF':
    //         //xử lý filter nhân viên tại chỗ này
    //         break;
    // }

    return state;
    
};