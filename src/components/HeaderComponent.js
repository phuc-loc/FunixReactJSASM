import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen:false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render(){
        return(
            <div className="container">
                <Navbar dark expand="md">
                    <NavbarToggler onClick = {this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41"/></NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/nhanvien'> <i class="fa fa-users" aria-hidden="true"></i> Nhân Viên </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/phongban'><i class="fa fa-id-card" aria-hidden="true"></i> Phòng Ban</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/bangluong'><i class="fa fa-money" aria-hidden="true"></i> Bảng Lương</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Header;