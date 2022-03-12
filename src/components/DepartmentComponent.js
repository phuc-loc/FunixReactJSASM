import React, { Component } from "react";
import { DEPARTMENTS } from '../shared/staffs';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Department extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departments: DEPARTMENTS
        }
    }

    render() {
        const item = this.state.departments.map((department) => {
            return (
                <div key={department.id} className="col-lg-4 col-sm-6 col-xs-12 p-2">
                    <Card className="p-2">
                        <h4 > {department.name} </h4>
                        <p className="pl-3">Số lượng nhân viên: {department.numberOfStaff}</p>
                    </Card>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {item}
                </div>
            </div>
        )
    }
}

export default Department;    