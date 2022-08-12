import React, {Component, useDebugValue}  from "react";
import {Card, CardText} from 'reactstrap';
import dateFormat from "dateformat";
import {DEPARTMENTS} from '../shared/staffs'

class StaffList extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedStaff: null
        }

    }

    onStaffSelected(staff) {
        this.setState({selectedStaff: staff})
        
    }

    renderStaff (staff){
        if(staff != null)
        return(
            <div className="col-12 col-md-5 col-lg-3 m-1 ">
                <Card className="p-1">
                    <h4>{staff.name}</h4>
                    <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                    <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
                    <p>Phòng ban: {staff.doB}</p>
                    <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                    <p>Số ngày đã làm thêm: {staff.overTime}</p>
                </Card>
            </div>
        )

    }

    render(){
        const list = this.props.staffs.map( (staff)=>{
            return(
                <div className="col-12 col-md-5 col-lg-3 m-1">
                    <Card onClick = {()=> this.onStaffSelected(staff)} className="p-1">
                        <CardText>{staff.name}</CardText>
                    </Card>
                </div>
            )
        })

        return(
            <div className="container">
                <div className="row">
                    {list}
                </div>
                <div className="row">
                    {this.renderStaff(this.state.selectedStaff)}
                </div>

            </div>
        )

    }

}

export default StaffList ;