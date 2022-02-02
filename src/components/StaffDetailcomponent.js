import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle, CardLink } from "reactstrap";
import dateFormat from 'dateformat'; 

class StaffDetail extends Component{
    constructor(props) {
        super(props);
    }

    renderStaff(staff) {

        if (staff != null) {
            return (
                <CardBody>

                    <CardTitle>Tên: {staff.name}</CardTitle>
                    <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")} </CardText>
                    <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                    <CardText>Phòng ban: {staff.department.name}</CardText>
                    <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                    <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>

                </CardBody>  
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    

    render(){
        const staff = this.props.staff

        console.log(staff);
        
        if (staff == null) {
            return (<div></div>);
        }

        const staffItem = this.renderStaff(staff);
        return (
            <div className='row'>
                {staffItem}
             
            </div>
        )
    }

}

export default StaffDetail;