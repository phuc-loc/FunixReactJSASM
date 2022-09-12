import React, { Component } from 'react';

import {
    Switch, Route, Redirect,
    withRouter
} from 'react-router-dom';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import StaffDetail from './StaffDetailComponent';
import Department from './DepartmentComponent';
import Salary from './SalaryComponent';

import StaffInDepartment from './StaffInDepartment';

import { connect } from 'react-redux';

import {
    fetchStaffs, fetchDepartments, fetchSalary,
    postStaff, editStaff, deleteStaff
} from '../redux/ActionCreators';

const mapStateToProps = (state) => ({

    staffs: state.staffs,
    departments: state.departments,
    salary: state.salary

})


const mapDispatchToProps = (dispatch) => (
    {
        fetchStaffs: () => dispatch(fetchStaffs()),
        fetchDepartments: () => dispatch(fetchDepartments()),
        fetchSalary: () => dispatch(fetchSalary()),

        postStaff: (name, doB, salaryScale, startDate, departmentId, annualLeave, overTime) => 
                        dispatch( postStaff(name, doB, salaryScale, startDate,departmentId, annualLeave, overTime) ),
        editStaff: (data) => dispatch( editStaff(data) ), //chú ý!!!

        deleteStaff: (id) => dispatch(deleteStaff(id))
    }
);


class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchStaffs();
        this.props.fetchDepartments();
        this.props.fetchSalary();
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         staffs : STAFFS
    //     }
    //     this.onAddStaff = this.onAddStaff.bind(this);
    // }

    // onAddStaff = (newStaff) => {
    //     this.setState( { 
    //         staffs: [...this.state.staffs, newStaff]
    //      } );
    //     console.log('newStaff o Main',newStaff);
    //   };

    render() {
        //console.log('State moi chua newStaff o Main',this.state.staffs);
        const StaffWithId = ({ match }) => {
            console.log('match.param', match.params);
            let item = this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.Id), 10)[0];
            return (
                <StaffDetail staff={item}
                                isLoading={this.props.staffs.isLoading}
                                errMess={this.props.staffs.errMess}
                            departments={this.props.departments}

                            editStaff={this.props.editStaff}
                            deleteStaff={this.props.deleteStaff}
    
                />
            );
        }



        const StaffWithDepartmentId = ( {match}) => {
            //console.log('param', match.params)
            let staff = this.props.staffs.staffs.filter((staff) => staff.departmentId === match.params.Id);
            //console.log('nhan vien trong phong ban',staff)
            let department = this.props.departments.departments.filter((department) => department.id === match.params.Id)[0];
            return (
                <StaffInDepartment staff={staff}
                    department={department}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/nhanvien" component={() => < StaffList staffs={this.props.staffs}
                                                                                postStaff={this.props.postStaff}
                                                                    //onAddStaff={this.onAddStaff} 
                                                                    />
                                                            } />
                        <Route path="/nhanvien/:Id" component={StaffWithId} />

                    <Route exact path="/phongban" component={() => <Department departments={this.props.departments} />} />

                        <Route path="/phongban/:Id" component={StaffWithDepartmentId} />

                    <Route exact path="/bangluong" component={() => <Salary salary={this.props.salary} />} />

                    <Redirect to="/" />
                </Switch>
                <Footer />
            </div>
        )
    }
}
//export default Main;
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Main)
);