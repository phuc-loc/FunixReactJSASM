import React, { Component } from 'react';
import StaffList from './StaffListComponent';
import StaffDetail from './StaffDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Department from './DepartmentComponent';
import Salary from './SalaryComponent';
import { connect } from 'react-redux';

//tạo state
const mapStateToProps = state => {
  return {
    staffs: state.staffs
  }
}


class Main extends Component {

  // onNewStaffAdded(value) {
  // }

  render() {

    const StaffWithId = ({ match }) => {

      console.log(match.params.staffId);

      return (
        <StaffDetail staff={this.props.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]} />
      );

    }

    return (
      <div>

        <Header />

        <Switch>
          {/* Trang nhân viên*/}
          <Route exact path="/nhanvien" component={() => <StaffList staffs={this.props.staffs} />} />

          {/* Trang thông tin*/}
          <Route path="/nhanvien/:staffId" component={StaffWithId} />

          <Route path="/phongban" component={Department} />

          <Route path="/bangluong" component={() => <Salary staffs={this.props.staffs} />} />

          <Redirect to="/" />

        </Switch>

        <Footer />


      </div>
    );
  }

}

//connect
export default withRouter(connect(mapStateToProps)(Main));
