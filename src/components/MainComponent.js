import React, { Component } from 'react';
import { DEPARTMENTS, STAFFS } from '../shared/staffs';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import StaffDetail from './StaffDetailComponent';
import Department from './DepartmentComponent';
import Salary from './SalaryComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs : STAFFS
        }
        this.onAddStaff = this.onAddStaff.bind(this);
    }

    onAddStaff = (newStaff) => {
        this.setState({ staffs: [...this.state.staffs, newStaff] });
        console.log('bbbb',newStaff);
      };

    render() {

        console.log('aaaa',this.state.staffs);

        const StaffWithId = ({match}) => {

            console.log ('match', match.params.staffId);
            console.log(this.state.staffs.filter( (staff) => staff.id) );
            // console.log cai nay ra
            console.log( 'check', this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId))[0]);
            let item =  this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId),10)[0];
            return(
                <StaffDetail staff={item} />
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/nhanvien"    component = { () => <StaffList staffs={this.state.staffs} 
                                                                                    onAddStaff={this.onAddStaff} 
                                                                            />
                                                                }  />
                    <Route path="/nhanvien/:staffId" component = {StaffWithId} />
                    <Route path="/phongban"          component = {Department} />
                    <Route path="/bangluong"         component = {() => <Salary staffs={this.state.staffs}  />} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </div>
        )
    }
}
export default Main;