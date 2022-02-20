import React, {Component} from 'react';

import { STAFFS } from '../shared/staffs';

import StaffList from './StaffListComponent';
import StaffDetail from './StaffDetailComponent';

import Header from './HeaderComponent';
import Footer from './FooterComponent';

import { Switch, Route, Redirect } from 'react-router-dom';

import Department from './DepartmentComponent';
import Salary from './SalaryComponent';


 
class Main extends Component {

  constructor(props) {
        
        super(props);
        
        this.state = {
          staffs: STAFFS,
      
        }
  }

  
  render(){
    

    const StaffWithId = ( {match} ) => {

      console.log(match.params.staffId);

      return(
        <StaffDetail staff={this.state.staffs.filter( (staff) => staff.id === parseInt(match.params.staffId,10) )[0]} />
      );
      
    }

    return (
      <div>

        <Header />
       
        <Switch>
          
          <Route exact path="/nhanvien" component={() => <StaffList staffs={this.state.staffs}/> } />

          <Route path="/nhanvien/:staffId" component={StaffWithId} />

          <Route path="/phongban" component= {Department} />


          <Route path="/bangluong" component={() => <Salary staffs={this.state.staffs}/> } />
          
          <Redirect to="/nhanvien" />

          
          
        </Switch>
        
        <Footer />
        

      </div>
    );
  }

}

export default Main;
