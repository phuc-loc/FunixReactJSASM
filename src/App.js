import './App.css';
import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

import {STAFFS} from './shared/staffs';
import StaffList from './components/StaffListComponent';





class App extends Component {

  constructor (props){
    super(props);
    this.state = {
      staffs : STAFFS
    }
    
  }

  render(){
    return (
      <div className = "container" >
        <Navbar dark color ="primary">
            <NavbarBrand href="/">Ứng dụng quản lí nhân sự</NavbarBrand>
        </Navbar>
        <StaffList staffs={this.state.staffs} />
      </div>
    );
  }
}

export default App