import * as ActionTypes from './ActionTypes';

import { url } from '../shared/url';


//fetch Staff  GET (lấy data)
export const fetchStaffs = () => (dispatch) => {

    dispatch(staffsLoading(true));

    return fetch(url + 'staffs')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(staffs => dispatch(addStaffs(staffs)))
        .catch(error => dispatch(staffsFailed(error.message)));
}

export const staffsLoading = () => (
    {
        type: ActionTypes.STAFFS_LOADING
    }
)
export const addStaffs = (staffs) => (
    {
        type: ActionTypes.ADD_STAFFS,
        payload: staffs
    }
)
export const staffsFailed = (errmess) => (
    {
        type: ActionTypes.STAFFS_FAILED,
        payload: errmess
    }
)


//fetch Department GET
export const fetchDepartments = () => (dispatch) => {

    dispatch(departmentsLoading(true));

    return fetch(url + 'departments')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(departments => dispatch(addDepartments(departments)))
        .catch(error => dispatch(departmentsFailed(error.message)));
}

export const departmentsLoading = () => (
    {
        type: ActionTypes.DEPARTMENTS_LOADING
    }
)
export const addDepartments = (departments) => (
    {
        type: ActionTypes.ADD_DEPARTMENTS,
        payload: departments
    }
)
export const departmentsFailed = (errmess) => (
    {
        type: ActionTypes.DEPARTMENTS_FAILED,
        payload: errmess
    }
)



//fetch Salary "GET"
export const fetchSalary = () => (dispatch) => {

    dispatch(salaryLoading(true));

    return fetch(url + 'staffsSalary')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(salary => dispatch(addSalary(salary)))
        .catch(error => dispatch(salaryFailed(error.message)));
}

export const salaryLoading = () => (
    {
        type: ActionTypes.SALARY_LOADING
    }
)
export const addSalary = (salary) => (
    {
        type: ActionTypes.ADD_SALARY,
        payload: salary
    }
)
export const salaryFailed = (errmess) => (
    {
        type: ActionTypes.SALARY_FAILED,
        payload: errmess
    }
)


//Fetch Post Staff "POST"
export const postStaff = (
    name,
    doB,
    salaryScale,
    startDate,
    departmentId,
    annualLeave,
    overTime
) => (dispatch) => {   //dispatch : middleware(thunk)

    const newStaff = {
        name: name,
        doB: doB,
        salaryScale: salaryScale,
        startDate: startDate,
        departmentId: departmentId,
        annualLeave: annualLeave,
        overTime: overTime,
        image: "/assets/images/alberto.png"
    };

    return fetch(
        url + 'staffs',
        {
            method: "POST",
            body: JSON.stringify(newStaff),
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin"
        }
    )
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(response => dispatch(addStaff(response)))
        .catch(error => {
            //console.log('post staff', error.message);
            alert('Your staff could not be posted\nError: ' + error.message);
        }
        );

};

export const addStaff = (staff) => ({
    type: ActionTypes.ADD_STAFF,
    payload: staff
});


//* "PATCH" k có lập newstaff 
export const editStaff = (staffEdit) => (dispatch) => {

    console.log('staffEdit2', staffEdit)

    return fetch(url + 'staffs', {
        method: 'PATCH',
        body: JSON.stringify(staffEdit),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        }
        )
        .then(response => response.json())
        .then(response => dispatch(updateStaffs(response)))
        .catch(error => {
            console.log('Post Staff', error.message);
            alert(`Your staff cant be edit Error:${error.message}`)
        })
}

export const updateStaffs = (staffEdit) => ({
    type: ActionTypes.UPDATE_STAFF,
    payload: staffEdit
})

//DELETE
export const deleteStaff = (id) => (dispatch) => {
    fetch(url + "staffs/" + id , {
        method: 'DELETE',
        //body: JSON.stringify(staffEdit),
        headers: {
            'Content-Type': 'application/json',
        }
    } )
    .then(response => response.json())
    .then(staff => dispatch(xoaNV(staff))) ;  //addStaffs() : action.payload = staffs
}

export const xoaNV = (staff) => ({
    type: ActionTypes.DELETE_STAFF,
    payload: staff
})